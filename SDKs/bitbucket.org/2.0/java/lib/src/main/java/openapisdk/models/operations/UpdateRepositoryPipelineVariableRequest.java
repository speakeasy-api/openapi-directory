package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRepositoryPipelineVariableRequest {
    public UpdateRepositoryPipelineVariablePathParams pathParams;
    public UpdateRepositoryPipelineVariableRequest withPathParams(UpdateRepositoryPipelineVariablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UpdateRepositoryPipelineVariableRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}