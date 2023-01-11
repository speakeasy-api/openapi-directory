package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineVariableForWorkspaceRequest {
    public UpdatePipelineVariableForWorkspacePathParams pathParams;
    public UpdatePipelineVariableForWorkspaceRequest withPathParams(UpdatePipelineVariableForWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UpdatePipelineVariableForWorkspaceRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}