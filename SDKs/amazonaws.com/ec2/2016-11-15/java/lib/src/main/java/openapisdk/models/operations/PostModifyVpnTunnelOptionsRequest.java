package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpnTunnelOptionsRequest {
    public PostModifyVpnTunnelOptionsQueryParams queryParams;
    public PostModifyVpnTunnelOptionsRequest withQueryParams(PostModifyVpnTunnelOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVpnTunnelOptionsHeaders headers;
    public PostModifyVpnTunnelOptionsRequest withHeaders(PostModifyVpnTunnelOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVpnTunnelOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}