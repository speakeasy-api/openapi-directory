package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableTransitGatewayRouteTablePropagationRequest {
    public PostDisableTransitGatewayRouteTablePropagationQueryParams queryParams;
    public PostDisableTransitGatewayRouteTablePropagationRequest withQueryParams(PostDisableTransitGatewayRouteTablePropagationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableTransitGatewayRouteTablePropagationHeaders headers;
    public PostDisableTransitGatewayRouteTablePropagationRequest withHeaders(PostDisableTransitGatewayRouteTablePropagationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableTransitGatewayRouteTablePropagationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}