package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbSecurityGroupRequest {
    public PostDeleteDbSecurityGroupQueryParams queryParams;
    public PostDeleteDbSecurityGroupRequest withQueryParams(PostDeleteDbSecurityGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbSecurityGroupHeaders headers;
    public PostDeleteDbSecurityGroupRequest withHeaders(PostDeleteDbSecurityGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbSecurityGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}