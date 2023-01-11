package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeClusterSecurityGroupIngressRequest {
    public PostRevokeClusterSecurityGroupIngressQueryParams queryParams;
    public PostRevokeClusterSecurityGroupIngressRequest withQueryParams(PostRevokeClusterSecurityGroupIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRevokeClusterSecurityGroupIngressHeaders headers;
    public PostRevokeClusterSecurityGroupIngressRequest withHeaders(PostRevokeClusterSecurityGroupIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRevokeClusterSecurityGroupIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}