package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagRoleRequest {
    public PostUntagRoleQueryParams queryParams;
    public PostUntagRoleRequest withQueryParams(PostUntagRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUntagRoleHeaders headers;
    public PostUntagRoleRequest withHeaders(PostUntagRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUntagRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}