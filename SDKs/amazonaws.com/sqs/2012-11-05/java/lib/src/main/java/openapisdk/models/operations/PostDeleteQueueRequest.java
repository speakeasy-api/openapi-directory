package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteQueueRequest {
    public PostDeleteQueueQueryParams queryParams;
    public PostDeleteQueueRequest withQueryParams(PostDeleteQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteQueueHeaders headers;
    public PostDeleteQueueRequest withHeaders(PostDeleteQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteQueueRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}