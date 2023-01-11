package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStoryRequest {
    public UpdateStoryPathParams pathParams;
    public UpdateStoryRequest withPathParams(UpdateStoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateStoryQueryParams queryParams;
    public UpdateStoryRequest withQueryParams(UpdateStoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateStoryRequestBodyInput request;
    public UpdateStoryRequest withRequest(UpdateStoryRequestBodyInput request) {
        this.request = request;
        return this;
    }
}