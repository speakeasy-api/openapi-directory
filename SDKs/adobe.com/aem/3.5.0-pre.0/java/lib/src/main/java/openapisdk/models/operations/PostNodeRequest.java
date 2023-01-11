package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNodeRequest {
    public PostNodePathParams pathParams;
    public PostNodeRequest withPathParams(PostNodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostNodeQueryParams queryParams;
    public PostNodeRequest withQueryParams(PostNodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostNodeRequestBody request;
    public PostNodeRequest withRequest(PostNodeRequestBody request) {
        this.request = request;
        return this;
    }
}