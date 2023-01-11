package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyUserRequest {
    public PostModifyUserQueryParams queryParams;
    public PostModifyUserRequest withQueryParams(PostModifyUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyUserHeaders headers;
    public PostModifyUserRequest withHeaders(PostModifyUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}