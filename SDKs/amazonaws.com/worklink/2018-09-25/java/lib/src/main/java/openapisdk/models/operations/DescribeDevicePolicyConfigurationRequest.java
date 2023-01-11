package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDevicePolicyConfigurationRequest {
    public DescribeDevicePolicyConfigurationHeaders headers;
    public DescribeDevicePolicyConfigurationRequest withHeaders(DescribeDevicePolicyConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeDevicePolicyConfigurationRequestBody request;
    public DescribeDevicePolicyConfigurationRequest withRequest(DescribeDevicePolicyConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}