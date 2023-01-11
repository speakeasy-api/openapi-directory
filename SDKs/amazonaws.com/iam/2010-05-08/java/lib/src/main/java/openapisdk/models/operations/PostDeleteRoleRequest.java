package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRoleRequest {
    public PostDeleteRoleQueryParams queryParams;
    public PostDeleteRoleRequest withQueryParams(PostDeleteRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteRoleHeaders headers;
    public PostDeleteRoleRequest withHeaders(PostDeleteRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}