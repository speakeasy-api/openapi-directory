package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableTransitGatewayRouteTablePropagationRequest {
    public PostEnableTransitGatewayRouteTablePropagationQueryParams queryParams;
    public PostEnableTransitGatewayRouteTablePropagationRequest withQueryParams(PostEnableTransitGatewayRouteTablePropagationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableTransitGatewayRouteTablePropagationHeaders headers;
    public PostEnableTransitGatewayRouteTablePropagationRequest withHeaders(PostEnableTransitGatewayRouteTablePropagationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableTransitGatewayRouteTablePropagationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}