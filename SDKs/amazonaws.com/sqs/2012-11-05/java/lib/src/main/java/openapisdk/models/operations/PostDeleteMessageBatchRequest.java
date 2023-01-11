package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteMessageBatchRequest {
    public PostDeleteMessageBatchQueryParams queryParams;
    public PostDeleteMessageBatchRequest withQueryParams(PostDeleteMessageBatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteMessageBatchHeaders headers;
    public PostDeleteMessageBatchRequest withHeaders(PostDeleteMessageBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteMessageBatchRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}