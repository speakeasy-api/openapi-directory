package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEndpointGroupRequest {
    public DescribeEndpointGroupHeaders headers;
    public DescribeEndpointGroupRequest withHeaders(DescribeEndpointGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEndpointGroupRequest request;
    public DescribeEndpointGroupRequest withRequest(openapisdk.models.shared.DescribeEndpointGroupRequest request) {
        this.request = request;
        return this;
    }
}