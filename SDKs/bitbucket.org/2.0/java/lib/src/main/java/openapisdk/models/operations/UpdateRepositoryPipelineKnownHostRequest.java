package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRepositoryPipelineKnownHostRequest {
    public UpdateRepositoryPipelineKnownHostPathParams pathParams;
    public UpdateRepositoryPipelineKnownHostRequest withPathParams(UpdateRepositoryPipelineKnownHostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UpdateRepositoryPipelineKnownHostRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}