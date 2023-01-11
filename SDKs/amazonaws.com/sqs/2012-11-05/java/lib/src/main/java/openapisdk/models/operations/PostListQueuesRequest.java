package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListQueuesRequest {
    public PostListQueuesQueryParams queryParams;
    public PostListQueuesRequest withQueryParams(PostListQueuesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListQueuesHeaders headers;
    public PostListQueuesRequest withHeaders(PostListQueuesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListQueuesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}