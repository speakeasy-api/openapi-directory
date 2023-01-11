package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAutoScalingConfigurationRequest {
    public DescribeAutoScalingConfigurationHeaders headers;
    public DescribeAutoScalingConfigurationRequest withHeaders(DescribeAutoScalingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAutoScalingConfigurationRequest request;
    public DescribeAutoScalingConfigurationRequest withRequest(openapisdk.models.shared.DescribeAutoScalingConfigurationRequest request) {
        this.request = request;
        return this;
    }
}