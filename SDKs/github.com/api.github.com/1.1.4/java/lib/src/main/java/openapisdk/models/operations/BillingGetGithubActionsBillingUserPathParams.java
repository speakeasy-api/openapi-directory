package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillingGetGithubActionsBillingUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public BillingGetGithubActionsBillingUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}