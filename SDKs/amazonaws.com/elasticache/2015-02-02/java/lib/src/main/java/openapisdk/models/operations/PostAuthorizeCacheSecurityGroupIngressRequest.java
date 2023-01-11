package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeCacheSecurityGroupIngressRequest {
    public PostAuthorizeCacheSecurityGroupIngressQueryParams queryParams;
    public PostAuthorizeCacheSecurityGroupIngressRequest withQueryParams(PostAuthorizeCacheSecurityGroupIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAuthorizeCacheSecurityGroupIngressHeaders headers;
    public PostAuthorizeCacheSecurityGroupIngressRequest withHeaders(PostAuthorizeCacheSecurityGroupIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAuthorizeCacheSecurityGroupIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}