package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsUpdateSelfHostedRunnerGroupForOrgRequest {
    public ActionsUpdateSelfHostedRunnerGroupForOrgPathParams pathParams;
    public ActionsUpdateSelfHostedRunnerGroupForOrgRequest withPathParams(ActionsUpdateSelfHostedRunnerGroupForOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody request;
    public ActionsUpdateSelfHostedRunnerGroupForOrgRequest withRequest(ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody request) {
        this.request = request;
        return this;
    }
}