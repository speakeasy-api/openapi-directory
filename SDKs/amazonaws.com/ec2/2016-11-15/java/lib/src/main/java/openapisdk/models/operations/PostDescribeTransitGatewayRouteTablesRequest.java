package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayRouteTablesRequest {
    public PostDescribeTransitGatewayRouteTablesQueryParams queryParams;
    public PostDescribeTransitGatewayRouteTablesRequest withQueryParams(PostDescribeTransitGatewayRouteTablesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTransitGatewayRouteTablesHeaders headers;
    public PostDescribeTransitGatewayRouteTablesRequest withHeaders(PostDescribeTransitGatewayRouteTablesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTransitGatewayRouteTablesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}