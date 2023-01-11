package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingGetGithubActionsBillingOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public BillingGetGithubActionsBillingOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}