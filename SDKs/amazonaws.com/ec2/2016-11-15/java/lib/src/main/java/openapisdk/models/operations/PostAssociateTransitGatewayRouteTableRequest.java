package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateTransitGatewayRouteTableRequest {
    public PostAssociateTransitGatewayRouteTableQueryParams queryParams;
    public PostAssociateTransitGatewayRouteTableRequest withQueryParams(PostAssociateTransitGatewayRouteTableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateTransitGatewayRouteTableHeaders headers;
    public PostAssociateTransitGatewayRouteTableRequest withHeaders(PostAssociateTransitGatewayRouteTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateTransitGatewayRouteTableRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}