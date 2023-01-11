package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewayVirtualInterfaceGroupsRequest {
    public PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams queryParams;
    public PostDescribeLocalGatewayVirtualInterfaceGroupsRequest withQueryParams(PostDescribeLocalGatewayVirtualInterfaceGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLocalGatewayVirtualInterfaceGroupsHeaders headers;
    public PostDescribeLocalGatewayVirtualInterfaceGroupsRequest withHeaders(PostDescribeLocalGatewayVirtualInterfaceGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLocalGatewayVirtualInterfaceGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}