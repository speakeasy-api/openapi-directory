package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateUserRequest {
    public PostCreateUserQueryParams queryParams;
    public PostCreateUserRequest withQueryParams(PostCreateUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateUserHeaders headers;
    public PostCreateUserRequest withHeaders(PostCreateUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}