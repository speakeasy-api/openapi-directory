package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAccessKeyRequest {
    public PostDeleteAccessKeyQueryParams queryParams;
    public PostDeleteAccessKeyRequest withQueryParams(PostDeleteAccessKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteAccessKeyHeaders headers;
    public PostDeleteAccessKeyRequest withHeaders(PostDeleteAccessKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteAccessKeyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}