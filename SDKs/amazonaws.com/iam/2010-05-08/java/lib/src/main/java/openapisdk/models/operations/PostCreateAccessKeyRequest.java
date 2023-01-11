package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAccessKeyRequest {
    public PostCreateAccessKeyQueryParams queryParams;
    public PostCreateAccessKeyRequest withQueryParams(PostCreateAccessKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateAccessKeyHeaders headers;
    public PostCreateAccessKeyRequest withHeaders(PostCreateAccessKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateAccessKeyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}