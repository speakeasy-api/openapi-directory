package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeDbSecurityGroupIngressRequest {
    public PostRevokeDbSecurityGroupIngressQueryParams queryParams;
    public PostRevokeDbSecurityGroupIngressRequest withQueryParams(PostRevokeDbSecurityGroupIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRevokeDbSecurityGroupIngressHeaders headers;
    public PostRevokeDbSecurityGroupIngressRequest withHeaders(PostRevokeDbSecurityGroupIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRevokeDbSecurityGroupIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}