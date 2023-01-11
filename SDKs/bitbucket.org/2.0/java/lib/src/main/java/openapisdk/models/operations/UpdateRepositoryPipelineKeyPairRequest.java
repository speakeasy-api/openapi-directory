package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRepositoryPipelineKeyPairRequest {
    public UpdateRepositoryPipelineKeyPairPathParams pathParams;
    public UpdateRepositoryPipelineKeyPairRequest withPathParams(UpdateRepositoryPipelineKeyPairPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UpdateRepositoryPipelineKeyPairRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}