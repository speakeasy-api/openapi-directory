package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRolePermissionsBoundaryRequest {
    public PostDeleteRolePermissionsBoundaryQueryParams queryParams;
    public PostDeleteRolePermissionsBoundaryRequest withQueryParams(PostDeleteRolePermissionsBoundaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteRolePermissionsBoundaryHeaders headers;
    public PostDeleteRolePermissionsBoundaryRequest withHeaders(PostDeleteRolePermissionsBoundaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteRolePermissionsBoundaryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}