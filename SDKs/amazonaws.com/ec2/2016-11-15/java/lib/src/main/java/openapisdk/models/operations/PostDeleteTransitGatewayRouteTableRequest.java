package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTransitGatewayRouteTableRequest {
    public PostDeleteTransitGatewayRouteTableQueryParams queryParams;
    public PostDeleteTransitGatewayRouteTableRequest withQueryParams(PostDeleteTransitGatewayRouteTableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTransitGatewayRouteTableHeaders headers;
    public PostDeleteTransitGatewayRouteTableRequest withHeaders(PostDeleteTransitGatewayRouteTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTransitGatewayRouteTableRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}