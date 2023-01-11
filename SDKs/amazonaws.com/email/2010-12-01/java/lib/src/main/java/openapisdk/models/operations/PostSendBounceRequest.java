package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendBounceRequest {
    public PostSendBounceQueryParams queryParams;
    public PostSendBounceRequest withQueryParams(PostSendBounceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSendBounceHeaders headers;
    public PostSendBounceRequest withHeaders(PostSendBounceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSendBounceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}