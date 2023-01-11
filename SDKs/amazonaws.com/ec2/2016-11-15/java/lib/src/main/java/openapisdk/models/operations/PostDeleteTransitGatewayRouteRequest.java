package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayRouteRequest {
    public PostDeleteTransitGatewayRouteQueryParams queryParams;
    public PostDeleteTransitGatewayRouteRequest withQueryParams(PostDeleteTransitGatewayRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTransitGatewayRouteHeaders headers;
    public PostDeleteTransitGatewayRouteRequest withHeaders(PostDeleteTransitGatewayRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTransitGatewayRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}