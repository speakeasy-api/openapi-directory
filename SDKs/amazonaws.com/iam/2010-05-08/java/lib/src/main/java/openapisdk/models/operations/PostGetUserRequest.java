package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetUserRequest {
    public PostGetUserQueryParams queryParams;
    public PostGetUserRequest withQueryParams(PostGetUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetUserHeaders headers;
    public PostGetUserRequest withHeaders(PostGetUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}