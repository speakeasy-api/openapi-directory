package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeDbSecurityGroupIngressRequest {
    public PostAuthorizeDbSecurityGroupIngressQueryParams queryParams;
    public PostAuthorizeDbSecurityGroupIngressRequest withQueryParams(PostAuthorizeDbSecurityGroupIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAuthorizeDbSecurityGroupIngressHeaders headers;
    public PostAuthorizeDbSecurityGroupIngressRequest withHeaders(PostAuthorizeDbSecurityGroupIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAuthorizeDbSecurityGroupIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}