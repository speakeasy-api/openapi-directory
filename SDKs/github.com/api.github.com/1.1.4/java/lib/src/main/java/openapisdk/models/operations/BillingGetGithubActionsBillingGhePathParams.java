package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingGetGithubActionsBillingGhePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=enterprise")
    public String enterprise;
    public BillingGetGithubActionsBillingGhePathParams withEnterprise(String enterprise) {
        this.enterprise = enterprise;
        return this;
    }
}