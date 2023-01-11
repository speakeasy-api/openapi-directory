package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingGetGithubPackagesBillingOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public BillingGetGithubPackagesBillingOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}