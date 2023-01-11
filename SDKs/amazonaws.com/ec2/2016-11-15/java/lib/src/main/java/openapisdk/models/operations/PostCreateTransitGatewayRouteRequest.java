package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTransitGatewayRouteRequest {
    public PostCreateTransitGatewayRouteQueryParams queryParams;
    public PostCreateTransitGatewayRouteRequest withQueryParams(PostCreateTransitGatewayRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTransitGatewayRouteHeaders headers;
    public PostCreateTransitGatewayRouteRequest withHeaders(PostCreateTransitGatewayRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTransitGatewayRouteRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}