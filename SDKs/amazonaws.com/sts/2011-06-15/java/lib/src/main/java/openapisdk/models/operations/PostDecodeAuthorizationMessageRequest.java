package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDecodeAuthorizationMessageRequest {
    public PostDecodeAuthorizationMessageQueryParams queryParams;
    public PostDecodeAuthorizationMessageRequest withQueryParams(PostDecodeAuthorizationMessageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDecodeAuthorizationMessageHeaders headers;
    public PostDecodeAuthorizationMessageRequest withHeaders(PostDecodeAuthorizationMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDecodeAuthorizationMessageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}