package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetQueueUrlRequest {
    public PostGetQueueUrlQueryParams queryParams;
    public PostGetQueueUrlRequest withQueryParams(PostGetQueueUrlQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetQueueUrlHeaders headers;
    public PostGetQueueUrlRequest withHeaders(PostGetQueueUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetQueueUrlRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}