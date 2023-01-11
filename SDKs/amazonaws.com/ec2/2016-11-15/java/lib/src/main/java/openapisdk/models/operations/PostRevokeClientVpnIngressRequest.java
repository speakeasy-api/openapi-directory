package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRevokeClientVpnIngressRequest {
    public PostRevokeClientVpnIngressQueryParams queryParams;
    public PostRevokeClientVpnIngressRequest withQueryParams(PostRevokeClientVpnIngressQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRevokeClientVpnIngressHeaders headers;
    public PostRevokeClientVpnIngressRequest withHeaders(PostRevokeClientVpnIngressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRevokeClientVpnIngressRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}