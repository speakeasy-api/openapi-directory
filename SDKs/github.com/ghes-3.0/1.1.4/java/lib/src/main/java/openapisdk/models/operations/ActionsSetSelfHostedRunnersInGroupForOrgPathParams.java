package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetSelfHostedRunnersInGroupForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsSetSelfHostedRunnersInGroupForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_group_id")
    public Long runnerGroupId;
    public ActionsSetSelfHostedRunnersInGroupForOrgPathParams withRunnerGroupId(Long runnerGroupId) {
        this.runnerGroupId = runnerGroupId;
        return this;
    }
}