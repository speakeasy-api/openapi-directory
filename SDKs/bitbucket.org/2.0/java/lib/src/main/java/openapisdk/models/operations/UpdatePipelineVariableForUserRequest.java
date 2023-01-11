package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelineVariableForUserRequest {
    public UpdatePipelineVariableForUserPathParams pathParams;
    public UpdatePipelineVariableForUserRequest withPathParams(UpdatePipelineVariableForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UpdatePipelineVariableForUserRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}