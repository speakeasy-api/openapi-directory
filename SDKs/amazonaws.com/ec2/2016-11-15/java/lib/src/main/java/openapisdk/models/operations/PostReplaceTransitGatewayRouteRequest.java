package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceTransitGatewayRouteRequest {
    public PostReplaceTransitGatewayRouteQueryParams queryParams;
    public PostReplaceTransitGatewayRouteRequest withQueryParams(PostReplaceTransitGatewayRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostReplaceTransitGatewayRouteHeaders headers;
    public PostReplaceTransitGatewayRouteRequest withHeaders(PostReplaceTransitGatewayRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostReplaceTransitGatewayRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}