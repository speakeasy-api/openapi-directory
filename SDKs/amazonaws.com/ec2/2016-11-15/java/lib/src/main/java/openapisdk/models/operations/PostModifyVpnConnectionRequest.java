package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpnConnectionRequest {
    public PostModifyVpnConnectionQueryParams queryParams;
    public PostModifyVpnConnectionRequest withQueryParams(PostModifyVpnConnectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVpnConnectionHeaders headers;
    public PostModifyVpnConnectionRequest withHeaders(PostModifyVpnConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVpnConnectionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}