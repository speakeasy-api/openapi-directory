package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatBasicRequestBody {
    @SpeakeasyMetadata("form:name=companyAddress")
    public String companyAddress;
    public VatBasicRequestBody withCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=companyName")
    public String companyName;
    public VatBasicRequestBody withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=companyNumber")
    public String companyNumber;
    public VatBasicRequestBody withCompanyNumber(String companyNumber) {
        this.companyNumber = companyNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=vatNumber")
    public String vatNumber;
    public VatBasicRequestBody withVatNumber(String vatNumber) {
        this.vatNumber = vatNumber;
        return this;
    }
}