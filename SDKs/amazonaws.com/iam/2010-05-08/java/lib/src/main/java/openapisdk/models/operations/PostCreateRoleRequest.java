package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateRoleRequest {
    public PostCreateRoleQueryParams queryParams;
    public PostCreateRoleRequest withQueryParams(PostCreateRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateRoleHeaders headers;
    public PostCreateRoleRequest withHeaders(PostCreateRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}