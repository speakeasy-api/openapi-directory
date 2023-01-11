package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest {
    public ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams pathParams;
    public ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest withPathParams(ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody request;
    public ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest withRequest(ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody request) {
        this.request = request;
        return this;
    }
}