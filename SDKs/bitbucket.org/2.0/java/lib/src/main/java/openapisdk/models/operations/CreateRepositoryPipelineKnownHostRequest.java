package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRepositoryPipelineKnownHostRequest {
    public CreateRepositoryPipelineKnownHostPathParams pathParams;
    public CreateRepositoryPipelineKnownHostRequest withPathParams(CreateRepositoryPipelineKnownHostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreateRepositoryPipelineKnownHostRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}