package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAuthenticationProfileRequest {
    public PostDeleteAuthenticationProfileQueryParams queryParams;
    public PostDeleteAuthenticationProfileRequest withQueryParams(PostDeleteAuthenticationProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteAuthenticationProfileHeaders headers;
    public PostDeleteAuthenticationProfileRequest withHeaders(PostDeleteAuthenticationProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteAuthenticationProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}