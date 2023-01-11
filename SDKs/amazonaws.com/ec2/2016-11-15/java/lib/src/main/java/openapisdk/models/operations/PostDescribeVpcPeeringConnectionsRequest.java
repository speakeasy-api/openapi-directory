package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcPeeringConnectionsRequest {
    public PostDescribeVpcPeeringConnectionsQueryParams queryParams;
    public PostDescribeVpcPeeringConnectionsRequest withQueryParams(PostDescribeVpcPeeringConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcPeeringConnectionsHeaders headers;
    public PostDescribeVpcPeeringConnectionsRequest withHeaders(PostDescribeVpcPeeringConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcPeeringConnectionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}