package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsGetSelfHostedRunnerGroupForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsGetSelfHostedRunnerGroupForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_group_id")
    public Long runnerGroupId;
    public ActionsGetSelfHostedRunnerGroupForOrgPathParams withRunnerGroupId(Long runnerGroupId) {
        this.runnerGroupId = runnerGroupId;
        return this;
    }
}