package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteServiceLinkedRoleRequest {
    public PostDeleteServiceLinkedRoleQueryParams queryParams;
    public PostDeleteServiceLinkedRoleRequest withQueryParams(PostDeleteServiceLinkedRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteServiceLinkedRoleHeaders headers;
    public PostDeleteServiceLinkedRoleRequest withHeaders(PostDeleteServiceLinkedRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteServiceLinkedRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}