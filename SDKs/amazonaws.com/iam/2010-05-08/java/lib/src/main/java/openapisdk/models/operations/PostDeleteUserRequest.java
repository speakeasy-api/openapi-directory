package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteUserRequest {
    public PostDeleteUserQueryParams queryParams;
    public PostDeleteUserRequest withQueryParams(PostDeleteUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteUserHeaders headers;
    public PostDeleteUserRequest withHeaders(PostDeleteUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}