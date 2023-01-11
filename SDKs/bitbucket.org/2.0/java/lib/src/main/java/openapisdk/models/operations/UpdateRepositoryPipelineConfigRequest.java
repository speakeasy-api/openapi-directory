package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRepositoryPipelineConfigRequest {
    public UpdateRepositoryPipelineConfigPathParams pathParams;
    public UpdateRepositoryPipelineConfigRequest withPathParams(UpdateRepositoryPipelineConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UpdateRepositoryPipelineConfigRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}