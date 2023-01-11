package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbSecurityGroupRequest {
    public PostCreateDbSecurityGroupQueryParams queryParams;
    public PostCreateDbSecurityGroupRequest withQueryParams(PostCreateDbSecurityGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbSecurityGroupHeaders headers;
    public PostCreateDbSecurityGroupRequest withHeaders(PostCreateDbSecurityGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbSecurityGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}