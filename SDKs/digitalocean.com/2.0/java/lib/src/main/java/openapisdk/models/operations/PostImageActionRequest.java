package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImageActionRequest {
    public PostImageActionPathParams pathParams;
    public PostImageActionRequest withPathParams(PostImageActionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostImageActionRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}