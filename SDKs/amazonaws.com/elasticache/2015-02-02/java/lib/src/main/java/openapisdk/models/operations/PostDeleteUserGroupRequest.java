package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteUserGroupRequest {
    public PostDeleteUserGroupQueryParams queryParams;
    public PostDeleteUserGroupRequest withQueryParams(PostDeleteUserGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteUserGroupHeaders headers;
    public PostDeleteUserGroupRequest withHeaders(PostDeleteUserGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteUserGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}