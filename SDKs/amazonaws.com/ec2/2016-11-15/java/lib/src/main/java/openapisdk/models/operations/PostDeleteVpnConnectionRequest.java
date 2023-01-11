package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpnConnectionRequest {
    public PostDeleteVpnConnectionQueryParams queryParams;
    public PostDeleteVpnConnectionRequest withQueryParams(PostDeleteVpnConnectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteVpnConnectionHeaders headers;
    public PostDeleteVpnConnectionRequest withHeaders(PostDeleteVpnConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteVpnConnectionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}