package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanySearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=company_name")
    public String companyName;
    public CompanySearchReadPathParams withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
}