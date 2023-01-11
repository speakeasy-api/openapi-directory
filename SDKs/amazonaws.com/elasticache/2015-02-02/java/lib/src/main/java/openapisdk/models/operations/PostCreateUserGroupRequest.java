package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateUserGroupRequest {
    public PostCreateUserGroupQueryParams queryParams;
    public PostCreateUserGroupRequest withQueryParams(PostCreateUserGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateUserGroupHeaders headers;
    public PostCreateUserGroupRequest withHeaders(PostCreateUserGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateUserGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}