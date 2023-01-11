package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsCreateWorkflowDispatchRequest {
    public ActionsCreateWorkflowDispatchPathParams pathParams;
    public ActionsCreateWorkflowDispatchRequest withPathParams(ActionsCreateWorkflowDispatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActionsCreateWorkflowDispatchRequestBody request;
    public ActionsCreateWorkflowDispatchRequest withRequest(ActionsCreateWorkflowDispatchRequestBody request) {
        this.request = request;
        return this;
    }
}