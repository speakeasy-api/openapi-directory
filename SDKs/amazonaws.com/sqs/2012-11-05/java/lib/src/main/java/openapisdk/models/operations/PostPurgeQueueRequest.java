package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurgeQueueRequest {
    public PostPurgeQueueQueryParams queryParams;
    public PostPurgeQueueRequest withQueryParams(PostPurgeQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPurgeQueueHeaders headers;
    public PostPurgeQueueRequest withHeaders(PostPurgeQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPurgeQueueRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}