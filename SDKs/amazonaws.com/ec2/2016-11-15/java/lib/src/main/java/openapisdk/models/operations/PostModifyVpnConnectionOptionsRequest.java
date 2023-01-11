package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpnConnectionOptionsRequest {
    public PostModifyVpnConnectionOptionsQueryParams queryParams;
    public PostModifyVpnConnectionOptionsRequest withQueryParams(PostModifyVpnConnectionOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVpnConnectionOptionsHeaders headers;
    public PostModifyVpnConnectionOptionsRequest withHeaders(PostModifyVpnConnectionOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVpnConnectionOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}