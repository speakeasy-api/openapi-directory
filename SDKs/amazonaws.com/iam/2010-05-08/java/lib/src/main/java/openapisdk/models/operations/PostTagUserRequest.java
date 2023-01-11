package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagUserRequest {
    public PostTagUserQueryParams queryParams;
    public PostTagUserRequest withQueryParams(PostTagUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTagUserHeaders headers;
    public PostTagUserRequest withHeaders(PostTagUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTagUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}