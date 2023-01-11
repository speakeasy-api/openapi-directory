package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRepositoryPipelineVariableRequest {
    public CreateRepositoryPipelineVariablePathParams pathParams;
    public CreateRepositoryPipelineVariableRequest withPathParams(CreateRepositoryPipelineVariablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreateRepositoryPipelineVariableRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}