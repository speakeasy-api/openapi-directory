package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeVpcPeeringConnectionsRequest {
    public DescribeVpcPeeringConnectionsHeaders headers;
    public DescribeVpcPeeringConnectionsRequest withHeaders(DescribeVpcPeeringConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeVpcPeeringConnectionsInput request;
    public DescribeVpcPeeringConnectionsRequest withRequest(openapisdk.models.shared.DescribeVpcPeeringConnectionsInput request) {
        this.request = request;
        return this;
    }
}