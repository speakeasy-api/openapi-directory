package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpnConnectionRouteRequest {
    public PostDeleteVpnConnectionRouteQueryParams queryParams;
    public PostDeleteVpnConnectionRouteRequest withQueryParams(PostDeleteVpnConnectionRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteVpnConnectionRouteHeaders headers;
    public PostDeleteVpnConnectionRouteRequest withHeaders(PostDeleteVpnConnectionRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteVpnConnectionRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}