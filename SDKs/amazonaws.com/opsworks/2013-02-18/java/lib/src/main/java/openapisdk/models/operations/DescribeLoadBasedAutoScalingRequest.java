package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLoadBasedAutoScalingRequest {
    public DescribeLoadBasedAutoScalingHeaders headers;
    public DescribeLoadBasedAutoScalingRequest withHeaders(DescribeLoadBasedAutoScalingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLoadBasedAutoScalingRequest request;
    public DescribeLoadBasedAutoScalingRequest withRequest(openapisdk.models.shared.DescribeLoadBasedAutoScalingRequest request) {
        this.request = request;
        return this;
    }
}