package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest {
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams queryParams;
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest withQueryParams(PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders headers;
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest withHeaders(PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}