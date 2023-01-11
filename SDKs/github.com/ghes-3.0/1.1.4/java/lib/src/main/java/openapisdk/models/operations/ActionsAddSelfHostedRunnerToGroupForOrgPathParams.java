package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsAddSelfHostedRunnerToGroupForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsAddSelfHostedRunnerToGroupForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_group_id")
    public Long runnerGroupId;
    public ActionsAddSelfHostedRunnerToGroupForOrgPathParams withRunnerGroupId(Long runnerGroupId) {
        this.runnerGroupId = runnerGroupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_id")
    public Long runnerId;
    public ActionsAddSelfHostedRunnerToGroupForOrgPathParams withRunnerId(Long runnerId) {
        this.runnerId = runnerId;
        return this;
    }
}