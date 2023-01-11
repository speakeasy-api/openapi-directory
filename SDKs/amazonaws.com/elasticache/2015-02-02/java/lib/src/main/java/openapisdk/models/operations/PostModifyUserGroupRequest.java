package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyUserGroupRequest {
    public PostModifyUserGroupQueryParams queryParams;
    public PostModifyUserGroupRequest withQueryParams(PostModifyUserGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyUserGroupHeaders headers;
    public PostModifyUserGroupRequest withHeaders(PostModifyUserGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyUserGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}