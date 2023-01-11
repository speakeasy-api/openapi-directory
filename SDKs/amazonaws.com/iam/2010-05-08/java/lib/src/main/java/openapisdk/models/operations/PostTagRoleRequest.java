package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagRoleRequest {
    public PostTagRoleQueryParams queryParams;
    public PostTagRoleRequest withQueryParams(PostTagRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTagRoleHeaders headers;
    public PostTagRoleRequest withHeaders(PostTagRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTagRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}