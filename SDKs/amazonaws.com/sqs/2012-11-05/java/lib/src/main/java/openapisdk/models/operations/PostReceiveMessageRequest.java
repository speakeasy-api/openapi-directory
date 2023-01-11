package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReceiveMessageRequest {
    public PostReceiveMessageQueryParams queryParams;
    public PostReceiveMessageRequest withQueryParams(PostReceiveMessageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostReceiveMessageHeaders headers;
    public PostReceiveMessageRequest withHeaders(PostReceiveMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostReceiveMessageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}