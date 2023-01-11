package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssumeRoleRequest {
    public PostAssumeRoleQueryParams queryParams;
    public PostAssumeRoleRequest withQueryParams(PostAssumeRoleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssumeRoleHeaders headers;
    public PostAssumeRoleRequest withHeaders(PostAssumeRoleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssumeRoleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}