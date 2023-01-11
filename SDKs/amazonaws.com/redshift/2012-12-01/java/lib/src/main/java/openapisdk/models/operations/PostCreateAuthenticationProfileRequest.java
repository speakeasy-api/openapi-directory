package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAuthenticationProfileRequest {
    public PostCreateAuthenticationProfileQueryParams queryParams;
    public PostCreateAuthenticationProfileRequest withQueryParams(PostCreateAuthenticationProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateAuthenticationProfileHeaders headers;
    public PostCreateAuthenticationProfileRequest withHeaders(PostCreateAuthenticationProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateAuthenticationProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}