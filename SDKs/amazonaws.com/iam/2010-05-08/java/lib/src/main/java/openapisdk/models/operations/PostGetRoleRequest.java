package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetRoleRequest {
    public PostGetRoleQueryParams queryParams;
    public PostGetRoleRequest withQueryParams(PostGetRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetRoleHeaders headers;
    public PostGetRoleRequest withHeaders(PostGetRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}