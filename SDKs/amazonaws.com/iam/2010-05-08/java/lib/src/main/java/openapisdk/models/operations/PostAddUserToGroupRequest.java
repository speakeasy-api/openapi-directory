package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddUserToGroupRequest {
    public PostAddUserToGroupQueryParams queryParams;
    public PostAddUserToGroupRequest withQueryParams(PostAddUserToGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddUserToGroupHeaders headers;
    public PostAddUserToGroupRequest withHeaders(PostAddUserToGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddUserToGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}