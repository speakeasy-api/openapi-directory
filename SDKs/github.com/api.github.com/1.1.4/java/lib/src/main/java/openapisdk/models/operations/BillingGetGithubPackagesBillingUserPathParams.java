package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingGetGithubPackagesBillingUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public BillingGetGithubPackagesBillingUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}