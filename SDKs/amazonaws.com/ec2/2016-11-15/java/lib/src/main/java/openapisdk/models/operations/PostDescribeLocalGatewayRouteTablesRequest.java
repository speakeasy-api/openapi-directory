package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewayRouteTablesRequest {
    public PostDescribeLocalGatewayRouteTablesQueryParams queryParams;
    public PostDescribeLocalGatewayRouteTablesRequest withQueryParams(PostDescribeLocalGatewayRouteTablesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLocalGatewayRouteTablesHeaders headers;
    public PostDescribeLocalGatewayRouteTablesRequest withHeaders(PostDescribeLocalGatewayRouteTablesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLocalGatewayRouteTablesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}