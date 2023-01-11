package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAcceleratorRequest {
    public DescribeAcceleratorHeaders headers;
    public DescribeAcceleratorRequest withHeaders(DescribeAcceleratorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAcceleratorRequest request;
    public DescribeAcceleratorRequest withRequest(openapisdk.models.shared.DescribeAcceleratorRequest request) {
        this.request = request;
        return this;
    }
}