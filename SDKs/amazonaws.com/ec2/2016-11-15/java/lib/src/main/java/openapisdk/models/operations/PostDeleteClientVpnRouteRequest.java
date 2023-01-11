package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClientVpnRouteRequest {
    public PostDeleteClientVpnRouteQueryParams queryParams;
    public PostDeleteClientVpnRouteRequest withQueryParams(PostDeleteClientVpnRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteClientVpnRouteHeaders headers;
    public PostDeleteClientVpnRouteRequest withHeaders(PostDeleteClientVpnRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteClientVpnRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}