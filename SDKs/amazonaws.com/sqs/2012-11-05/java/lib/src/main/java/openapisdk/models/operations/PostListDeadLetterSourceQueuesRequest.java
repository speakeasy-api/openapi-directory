package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListDeadLetterSourceQueuesRequest {
    public PostListDeadLetterSourceQueuesQueryParams queryParams;
    public PostListDeadLetterSourceQueuesRequest withQueryParams(PostListDeadLetterSourceQueuesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListDeadLetterSourceQueuesHeaders headers;
    public PostListDeadLetterSourceQueuesRequest withHeaders(PostListDeadLetterSourceQueuesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListDeadLetterSourceQueuesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}