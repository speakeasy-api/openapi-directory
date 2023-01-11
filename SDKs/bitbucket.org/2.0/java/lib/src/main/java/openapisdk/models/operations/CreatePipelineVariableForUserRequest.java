package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePipelineVariableForUserRequest {
    public CreatePipelineVariableForUserPathParams pathParams;
    public CreatePipelineVariableForUserRequest withPathParams(CreatePipelineVariableForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreatePipelineVariableForUserRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}