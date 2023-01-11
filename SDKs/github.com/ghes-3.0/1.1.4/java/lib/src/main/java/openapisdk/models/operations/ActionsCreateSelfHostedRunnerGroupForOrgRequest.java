package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsCreateSelfHostedRunnerGroupForOrgRequest {
    public ActionsCreateSelfHostedRunnerGroupForOrgPathParams pathParams;
    public ActionsCreateSelfHostedRunnerGroupForOrgRequest withPathParams(ActionsCreateSelfHostedRunnerGroupForOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsCreateSelfHostedRunnerGroupForOrgRequestBody request;
    public ActionsCreateSelfHostedRunnerGroupForOrgRequest withRequest(ActionsCreateSelfHostedRunnerGroupForOrgRequestBody request) {
        this.request = request;
        return this;
    }
}