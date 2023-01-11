package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteIdentityRequest {
    public PostDeleteIdentityQueryParams queryParams;
    public PostDeleteIdentityRequest withQueryParams(PostDeleteIdentityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteIdentityHeaders headers;
    public PostDeleteIdentityRequest withHeaders(PostDeleteIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteIdentityRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}