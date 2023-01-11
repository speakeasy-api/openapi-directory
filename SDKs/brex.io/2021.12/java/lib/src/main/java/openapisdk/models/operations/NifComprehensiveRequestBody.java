package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NifComprehensiveRequestBody {
    @SpeakeasyMetadata("form:name=companyAddress")
    public String companyAddress;
    public NifComprehensiveRequestBody withCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=companyName")
    public String companyName;
    public NifComprehensiveRequestBody withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=nifNumber")
    public String nifNumber;
    public NifComprehensiveRequestBody withNifNumber(String nifNumber) {
        this.nifNumber = nifNumber;
        return this;
    }
}