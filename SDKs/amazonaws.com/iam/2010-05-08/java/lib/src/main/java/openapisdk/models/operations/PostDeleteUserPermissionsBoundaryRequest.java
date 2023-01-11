package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteUserPermissionsBoundaryRequest {
    public PostDeleteUserPermissionsBoundaryQueryParams queryParams;
    public PostDeleteUserPermissionsBoundaryRequest withQueryParams(PostDeleteUserPermissionsBoundaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteUserPermissionsBoundaryHeaders headers;
    public PostDeleteUserPermissionsBoundaryRequest withHeaders(PostDeleteUserPermissionsBoundaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteUserPermissionsBoundaryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}