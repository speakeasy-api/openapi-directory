package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsGetSelfHostedRunnerForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public ActionsGetSelfHostedRunnerForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runner_id")
    public Long runnerId;
    public ActionsGetSelfHostedRunnerForOrgPathParams withRunnerId(Long runnerId) {
        this.runnerId = runnerId;
        return this;
    }
}