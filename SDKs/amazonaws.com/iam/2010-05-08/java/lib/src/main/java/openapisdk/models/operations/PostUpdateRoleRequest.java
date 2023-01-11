package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateRoleRequest {
    public PostUpdateRoleQueryParams queryParams;
    public PostUpdateRoleRequest withQueryParams(PostUpdateRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateRoleHeaders headers;
    public PostUpdateRoleRequest withHeaders(PostUpdateRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}