package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAccessKeyRequest {
    public PostUpdateAccessKeyQueryParams queryParams;
    public PostUpdateAccessKeyRequest withQueryParams(PostUpdateAccessKeyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateAccessKeyHeaders headers;
    public PostUpdateAccessKeyRequest withHeaders(PostUpdateAccessKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateAccessKeyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}