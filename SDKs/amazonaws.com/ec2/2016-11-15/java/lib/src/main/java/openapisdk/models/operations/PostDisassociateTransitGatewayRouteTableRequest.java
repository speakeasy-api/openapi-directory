package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateTransitGatewayRouteTableRequest {
    public PostDisassociateTransitGatewayRouteTableQueryParams queryParams;
    public PostDisassociateTransitGatewayRouteTableRequest withQueryParams(PostDisassociateTransitGatewayRouteTableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateTransitGatewayRouteTableHeaders headers;
    public PostDisassociateTransitGatewayRouteTableRequest withHeaders(PostDisassociateTransitGatewayRouteTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateTransitGatewayRouteTableRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}