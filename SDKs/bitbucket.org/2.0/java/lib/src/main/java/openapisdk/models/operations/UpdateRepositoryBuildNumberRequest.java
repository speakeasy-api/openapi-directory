package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRepositoryBuildNumberRequest {
    public UpdateRepositoryBuildNumberPathParams pathParams;
    public UpdateRepositoryBuildNumberRequest withPathParams(UpdateRepositoryBuildNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public UpdateRepositoryBuildNumberRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}