package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCustomRoutingEndpointGroupRequest {
    public DescribeCustomRoutingEndpointGroupHeaders headers;
    public DescribeCustomRoutingEndpointGroupRequest withHeaders(DescribeCustomRoutingEndpointGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCustomRoutingEndpointGroupRequest request;
    public DescribeCustomRoutingEndpointGroupRequest withRequest(openapisdk.models.shared.DescribeCustomRoutingEndpointGroupRequest request) {
        this.request = request;
        return this;
    }
}