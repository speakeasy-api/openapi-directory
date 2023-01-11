package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagQueueRequest {
    public PostTagQueueQueryParams queryParams;
    public PostTagQueueRequest withQueryParams(PostTagQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTagQueueHeaders headers;
    public PostTagQueueRequest withHeaders(PostTagQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTagQueueRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}