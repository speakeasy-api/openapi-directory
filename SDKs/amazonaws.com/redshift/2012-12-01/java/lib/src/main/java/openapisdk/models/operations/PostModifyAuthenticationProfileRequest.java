package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyAuthenticationProfileRequest {
    public PostModifyAuthenticationProfileQueryParams queryParams;
    public PostModifyAuthenticationProfileRequest withQueryParams(PostModifyAuthenticationProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyAuthenticationProfileHeaders headers;
    public PostModifyAuthenticationProfileRequest withHeaders(PostModifyAuthenticationProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyAuthenticationProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}