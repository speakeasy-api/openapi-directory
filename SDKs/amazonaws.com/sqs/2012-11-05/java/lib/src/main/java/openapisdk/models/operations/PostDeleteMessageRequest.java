package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteMessageRequest {
    public PostDeleteMessageQueryParams queryParams;
    public PostDeleteMessageRequest withQueryParams(PostDeleteMessageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteMessageHeaders headers;
    public PostDeleteMessageRequest withHeaders(PostDeleteMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteMessageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}