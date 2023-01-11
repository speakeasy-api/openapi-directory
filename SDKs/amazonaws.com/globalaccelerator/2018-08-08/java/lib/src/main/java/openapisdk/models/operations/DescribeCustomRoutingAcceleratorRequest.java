package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCustomRoutingAcceleratorRequest {
    public DescribeCustomRoutingAcceleratorHeaders headers;
    public DescribeCustomRoutingAcceleratorRequest withHeaders(DescribeCustomRoutingAcceleratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCustomRoutingAcceleratorRequest request;
    public DescribeCustomRoutingAcceleratorRequest withRequest(openapisdk.models.shared.DescribeCustomRoutingAcceleratorRequest request) {
        this.request = request;
        return this;
    }
}