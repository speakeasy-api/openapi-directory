package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTextRequest {
    public PostTextPathParams pathParams;
    public PostTextRequest withPathParams(PostTextPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostTextHeaders headers;
    public PostTextRequest withHeaders(PostTextHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostTextRequestBody request;
    public PostTextRequest withRequest(PostTextRequestBody request) {
        this.request = request;
        return this;
    }
}