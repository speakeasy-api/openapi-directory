package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewayRouteTableVpcAssociationsRequest {
    public PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams queryParams;
    public PostDescribeLocalGatewayRouteTableVpcAssociationsRequest withQueryParams(PostDescribeLocalGatewayRouteTableVpcAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLocalGatewayRouteTableVpcAssociationsHeaders headers;
    public PostDescribeLocalGatewayRouteTableVpcAssociationsRequest withHeaders(PostDescribeLocalGatewayRouteTableVpcAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLocalGatewayRouteTableVpcAssociationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}