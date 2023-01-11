package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePipelineVariableForWorkspaceRequest {
    public CreatePipelineVariableForWorkspacePathParams pathParams;
    public CreatePipelineVariableForWorkspaceRequest withPathParams(CreatePipelineVariableForWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreatePipelineVariableForWorkspaceRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}