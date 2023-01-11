package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatComprehensiveRequestBody {
    @SpeakeasyMetadata("form:name=companyAddress")
    public String companyAddress;
    public VatComprehensiveRequestBody withCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=companyName")
    public String companyName;
    public VatComprehensiveRequestBody withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=companyNumber")
    public String companyNumber;
    public VatComprehensiveRequestBody withCompanyNumber(String companyNumber) {
        this.companyNumber = companyNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=vatNumber")
    public String vatNumber;
    public VatComprehensiveRequestBody withVatNumber(String vatNumber) {
        this.vatNumber = vatNumber;
        return this;
    }
}