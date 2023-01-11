package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostToConnectionRequest {
    public PostToConnectionPathParams pathParams;
    public PostToConnectionRequest withPathParams(PostToConnectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostToConnectionHeaders headers;
    public PostToConnectionRequest withHeaders(PostToConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostToConnectionRequestBody request;
    public PostToConnectionRequest withRequest(PostToConnectionRequestBody request) {
        this.request = request;
        return this;
    }
}