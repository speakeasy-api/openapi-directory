package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NifBasicRequestBody {
    @SpeakeasyMetadata("form:name=companyAddress")
    public String companyAddress;
    public NifBasicRequestBody withCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=companyName")
    public String companyName;
    public NifBasicRequestBody withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=nifNumber")
    public String nifNumber;
    public NifBasicRequestBody withNifNumber(String nifNumber) {
        this.nifNumber = nifNumber;
        return this;
    }
}