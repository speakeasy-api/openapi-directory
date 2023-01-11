package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeSecurityGroupIngressRequest {
    public PostAuthorizeSecurityGroupIngressQueryParams queryParams;
    public PostAuthorizeSecurityGroupIngressRequest withQueryParams(PostAuthorizeSecurityGroupIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAuthorizeSecurityGroupIngressHeaders headers;
    public PostAuthorizeSecurityGroupIngressRequest withHeaders(PostAuthorizeSecurityGroupIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAuthorizeSecurityGroupIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}