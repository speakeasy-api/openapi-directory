package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSecurityGroupRequest {
    public PostDeleteSecurityGroupQueryParams queryParams;
    public PostDeleteSecurityGroupRequest withQueryParams(PostDeleteSecurityGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSecurityGroupHeaders headers;
    public PostDeleteSecurityGroupRequest withHeaders(PostDeleteSecurityGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSecurityGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}