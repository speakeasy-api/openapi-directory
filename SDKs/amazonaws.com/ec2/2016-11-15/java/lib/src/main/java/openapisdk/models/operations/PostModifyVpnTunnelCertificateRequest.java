package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpnTunnelCertificateRequest {
    public PostModifyVpnTunnelCertificateQueryParams queryParams;
    public PostModifyVpnTunnelCertificateRequest withQueryParams(PostModifyVpnTunnelCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVpnTunnelCertificateHeaders headers;
    public PostModifyVpnTunnelCertificateRequest withHeaders(PostModifyVpnTunnelCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVpnTunnelCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}