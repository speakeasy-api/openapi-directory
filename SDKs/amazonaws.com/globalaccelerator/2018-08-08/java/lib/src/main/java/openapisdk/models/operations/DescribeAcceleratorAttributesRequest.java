package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAcceleratorAttributesRequest {
    public DescribeAcceleratorAttributesHeaders headers;
    public DescribeAcceleratorAttributesRequest withHeaders(DescribeAcceleratorAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAcceleratorAttributesRequest request;
    public DescribeAcceleratorAttributesRequest withRequest(openapisdk.models.shared.DescribeAcceleratorAttributesRequest request) {
        this.request = request;
        return this;
    }
}