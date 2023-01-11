package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListSelfHostedRunnersForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsListSelfHostedRunnersForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}