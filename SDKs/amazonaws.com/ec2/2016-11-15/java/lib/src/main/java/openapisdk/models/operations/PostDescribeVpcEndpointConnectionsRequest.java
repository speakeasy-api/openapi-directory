package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointConnectionsRequest {
    public PostDescribeVpcEndpointConnectionsQueryParams queryParams;
    public PostDescribeVpcEndpointConnectionsRequest withQueryParams(PostDescribeVpcEndpointConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcEndpointConnectionsHeaders headers;
    public PostDescribeVpcEndpointConnectionsRequest withHeaders(PostDescribeVpcEndpointConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcEndpointConnectionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}