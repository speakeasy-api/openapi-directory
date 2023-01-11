package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagQueueRequest {
    public PostUntagQueueQueryParams queryParams;
    public PostUntagQueueRequest withQueryParams(PostUntagQueueQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUntagQueueHeaders headers;
    public PostUntagQueueRequest withHeaders(PostUntagQueueHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUntagQueueRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}