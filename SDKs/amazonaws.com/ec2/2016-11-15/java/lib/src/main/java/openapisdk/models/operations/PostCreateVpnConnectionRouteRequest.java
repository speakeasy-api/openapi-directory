package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpnConnectionRouteRequest {
    public PostCreateVpnConnectionRouteQueryParams queryParams;
    public PostCreateVpnConnectionRouteRequest withQueryParams(PostCreateVpnConnectionRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateVpnConnectionRouteHeaders headers;
    public PostCreateVpnConnectionRouteRequest withHeaders(PostCreateVpnConnectionRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateVpnConnectionRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}