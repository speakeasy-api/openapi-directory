package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTransitGatewayRouteTablePropagationsRequest {
    public PostGetTransitGatewayRouteTablePropagationsQueryParams queryParams;
    public PostGetTransitGatewayRouteTablePropagationsRequest withQueryParams(PostGetTransitGatewayRouteTablePropagationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetTransitGatewayRouteTablePropagationsHeaders headers;
    public PostGetTransitGatewayRouteTablePropagationsRequest withHeaders(PostGetTransitGatewayRouteTablePropagationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetTransitGatewayRouteTablePropagationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}