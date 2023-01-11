package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTimeBasedAutoScalingRequest {
    public DescribeTimeBasedAutoScalingHeaders headers;
    public DescribeTimeBasedAutoScalingRequest withHeaders(DescribeTimeBasedAutoScalingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTimeBasedAutoScalingRequest request;
    public DescribeTimeBasedAutoScalingRequest withRequest(openapisdk.models.shared.DescribeTimeBasedAutoScalingRequest request) {
        this.request = request;
        return this;
    }
}