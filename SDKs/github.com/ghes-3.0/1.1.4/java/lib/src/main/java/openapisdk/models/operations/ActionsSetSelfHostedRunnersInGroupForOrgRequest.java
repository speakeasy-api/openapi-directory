package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsSetSelfHostedRunnersInGroupForOrgRequest {
    public ActionsSetSelfHostedRunnersInGroupForOrgPathParams pathParams;
    public ActionsSetSelfHostedRunnersInGroupForOrgRequest withPathParams(ActionsSetSelfHostedRunnersInGroupForOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsSetSelfHostedRunnersInGroupForOrgRequestBody request;
    public ActionsSetSelfHostedRunnersInGroupForOrgRequest withRequest(ActionsSetSelfHostedRunnersInGroupForOrgRequestBody request) {
        this.request = request;
        return this;
    }
}