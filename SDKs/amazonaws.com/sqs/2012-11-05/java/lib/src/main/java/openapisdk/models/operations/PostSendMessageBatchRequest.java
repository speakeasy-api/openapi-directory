package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendMessageBatchRequest {
    public PostSendMessageBatchQueryParams queryParams;
    public PostSendMessageBatchRequest withQueryParams(PostSendMessageBatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSendMessageBatchHeaders headers;
    public PostSendMessageBatchRequest withHeaders(PostSendMessageBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSendMessageBatchRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}