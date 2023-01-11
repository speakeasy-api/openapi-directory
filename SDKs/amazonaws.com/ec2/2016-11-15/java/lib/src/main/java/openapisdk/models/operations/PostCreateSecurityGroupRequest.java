package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSecurityGroupRequest {
    public PostCreateSecurityGroupQueryParams queryParams;
    public PostCreateSecurityGroupRequest withQueryParams(PostCreateSecurityGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateSecurityGroupHeaders headers;
    public PostCreateSecurityGroupRequest withHeaders(PostCreateSecurityGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateSecurityGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}