package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostChangePasswordRequest {
    public PostChangePasswordQueryParams queryParams;
    public PostChangePasswordRequest withQueryParams(PostChangePasswordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostChangePasswordHeaders headers;
    public PostChangePasswordRequest withHeaders(PostChangePasswordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostChangePasswordRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}