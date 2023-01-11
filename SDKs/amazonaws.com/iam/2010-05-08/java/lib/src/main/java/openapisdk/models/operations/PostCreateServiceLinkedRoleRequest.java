package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateServiceLinkedRoleRequest {
    public PostCreateServiceLinkedRoleQueryParams queryParams;
    public PostCreateServiceLinkedRoleRequest withQueryParams(PostCreateServiceLinkedRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateServiceLinkedRoleHeaders headers;
    public PostCreateServiceLinkedRoleRequest withHeaders(PostCreateServiceLinkedRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateServiceLinkedRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}