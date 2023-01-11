package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListSelfHostedRunnerGroupsForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsListSelfHostedRunnerGroupsForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}