package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePipelineForRepositoryRequest {
    public CreatePipelineForRepositoryPathParams pathParams;
    public CreatePipelineForRepositoryRequest withPathParams(CreatePipelineForRepositoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreatePipelineForRepositoryRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}