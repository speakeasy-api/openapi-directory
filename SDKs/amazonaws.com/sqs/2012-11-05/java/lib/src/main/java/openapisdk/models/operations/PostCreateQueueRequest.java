package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateQueueRequest {
    public PostCreateQueueQueryParams queryParams;
    public PostCreateQueueRequest withQueryParams(PostCreateQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateQueueHeaders headers;
    public PostCreateQueueRequest withHeaders(PostCreateQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateQueueRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}