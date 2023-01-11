package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCustomRoutingAcceleratorAttributesRequest {
    public DescribeCustomRoutingAcceleratorAttributesHeaders headers;
    public DescribeCustomRoutingAcceleratorAttributesRequest withHeaders(DescribeCustomRoutingAcceleratorAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCustomRoutingAcceleratorAttributesRequest request;
    public DescribeCustomRoutingAcceleratorAttributesRequest withRequest(openapisdk.models.shared.DescribeCustomRoutingAcceleratorAttributesRequest request) {
        this.request = request;
        return this;
    }
}