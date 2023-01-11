package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeClientVpnIngressRequest {
    public PostAuthorizeClientVpnIngressQueryParams queryParams;
    public PostAuthorizeClientVpnIngressRequest withQueryParams(PostAuthorizeClientVpnIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAuthorizeClientVpnIngressHeaders headers;
    public PostAuthorizeClientVpnIngressRequest withHeaders(PostAuthorizeClientVpnIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAuthorizeClientVpnIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}