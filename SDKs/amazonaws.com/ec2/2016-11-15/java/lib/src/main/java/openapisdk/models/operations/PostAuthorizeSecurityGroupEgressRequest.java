package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeSecurityGroupEgressRequest {
    public PostAuthorizeSecurityGroupEgressQueryParams queryParams;
    public PostAuthorizeSecurityGroupEgressRequest withQueryParams(PostAuthorizeSecurityGroupEgressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAuthorizeSecurityGroupEgressHeaders headers;
    public PostAuthorizeSecurityGroupEgressRequest withHeaders(PostAuthorizeSecurityGroupEgressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAuthorizeSecurityGroupEgressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}