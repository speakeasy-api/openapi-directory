package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagUserRequest {
    public PostUntagUserQueryParams queryParams;
    public PostUntagUserRequest withQueryParams(PostUntagUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUntagUserHeaders headers;
    public PostUntagUserRequest withHeaders(PostUntagUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUntagUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}