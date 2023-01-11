package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContentRequest {
    public PostContentPathParams pathParams;
    public PostContentRequest withPathParams(PostContentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostContentHeaders headers;
    public PostContentRequest withHeaders(PostContentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostContentRequestBody request;
    public PostContentRequest withRequest(PostContentRequestBody request) {
        this.request = request;
        return this;
    }
}