package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutRolePermissionsBoundaryRequest {
    public PostPutRolePermissionsBoundaryQueryParams queryParams;
    public PostPutRolePermissionsBoundaryRequest withQueryParams(PostPutRolePermissionsBoundaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutRolePermissionsBoundaryHeaders headers;
    public PostPutRolePermissionsBoundaryRequest withHeaders(PostPutRolePermissionsBoundaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutRolePermissionsBoundaryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}