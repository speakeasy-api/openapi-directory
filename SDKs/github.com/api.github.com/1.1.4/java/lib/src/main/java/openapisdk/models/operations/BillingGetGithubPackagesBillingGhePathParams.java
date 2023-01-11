package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingGetGithubPackagesBillingGhePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public BillingGetGithubPackagesBillingGhePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
}