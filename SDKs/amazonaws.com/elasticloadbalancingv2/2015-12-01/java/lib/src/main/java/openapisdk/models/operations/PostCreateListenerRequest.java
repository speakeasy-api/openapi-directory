package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateListenerRequest {
    public PostCreateListenerQueryParams queryParams;
    public PostCreateListenerRequest withQueryParams(PostCreateListenerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateListenerHeaders headers;
    public PostCreateListenerRequest withHeaders(PostCreateListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateListenerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}