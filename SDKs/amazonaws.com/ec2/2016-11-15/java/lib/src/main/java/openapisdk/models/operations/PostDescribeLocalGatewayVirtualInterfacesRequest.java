package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLocalGatewayVirtualInterfacesRequest {
    public PostDescribeLocalGatewayVirtualInterfacesQueryParams queryParams;
    public PostDescribeLocalGatewayVirtualInterfacesRequest withQueryParams(PostDescribeLocalGatewayVirtualInterfacesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLocalGatewayVirtualInterfacesHeaders headers;
    public PostDescribeLocalGatewayVirtualInterfacesRequest withHeaders(PostDescribeLocalGatewayVirtualInterfacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLocalGatewayVirtualInterfacesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}