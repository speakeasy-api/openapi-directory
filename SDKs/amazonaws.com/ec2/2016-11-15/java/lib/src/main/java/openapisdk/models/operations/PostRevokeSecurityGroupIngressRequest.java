package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeSecurityGroupIngressRequest {
    public PostRevokeSecurityGroupIngressQueryParams queryParams;
    public PostRevokeSecurityGroupIngressRequest withQueryParams(PostRevokeSecurityGroupIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRevokeSecurityGroupIngressHeaders headers;
    public PostRevokeSecurityGroupIngressRequest withHeaders(PostRevokeSecurityGroupIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRevokeSecurityGroupIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}