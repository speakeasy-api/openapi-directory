package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobSearchallReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=company_name")
    public String companyName;
    public JobSearchallReadPathParams withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
}