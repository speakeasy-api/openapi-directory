package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClientVpnRouteRequest {
    public PostCreateClientVpnRouteQueryParams queryParams;
    public PostCreateClientVpnRouteRequest withQueryParams(PostCreateClientVpnRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateClientVpnRouteHeaders headers;
    public PostCreateClientVpnRouteRequest withHeaders(PostCreateClientVpnRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateClientVpnRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}