package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTransitGatewayRouteTableAssociationsRequest {
    public PostGetTransitGatewayRouteTableAssociationsQueryParams queryParams;
    public PostGetTransitGatewayRouteTableAssociationsRequest withQueryParams(PostGetTransitGatewayRouteTableAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetTransitGatewayRouteTableAssociationsHeaders headers;
    public PostGetTransitGatewayRouteTableAssociationsRequest withHeaders(PostGetTransitGatewayRouteTableAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetTransitGatewayRouteTableAssociationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}