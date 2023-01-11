package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeClusterSecurityGroupIngressRequest {
    public PostAuthorizeClusterSecurityGroupIngressQueryParams queryParams;
    public PostAuthorizeClusterSecurityGroupIngressRequest withQueryParams(PostAuthorizeClusterSecurityGroupIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAuthorizeClusterSecurityGroupIngressHeaders headers;
    public PostAuthorizeClusterSecurityGroupIngressRequest withHeaders(PostAuthorizeClusterSecurityGroupIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAuthorizeClusterSecurityGroupIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}