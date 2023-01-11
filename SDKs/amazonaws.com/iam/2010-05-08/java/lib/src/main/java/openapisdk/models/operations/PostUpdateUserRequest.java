package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateUserRequest {
    public PostUpdateUserQueryParams queryParams;
    public PostUpdateUserRequest withQueryParams(PostUpdateUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateUserHeaders headers;
    public PostUpdateUserRequest withHeaders(PostUpdateUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}