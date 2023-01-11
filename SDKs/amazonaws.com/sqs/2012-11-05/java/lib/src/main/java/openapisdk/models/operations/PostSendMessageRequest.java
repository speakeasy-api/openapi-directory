package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendMessageRequest {
    public PostSendMessageQueryParams queryParams;
    public PostSendMessageRequest withQueryParams(PostSendMessageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSendMessageHeaders headers;
    public PostSendMessageRequest withHeaders(PostSendMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSendMessageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}