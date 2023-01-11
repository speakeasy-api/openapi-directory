package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLoggingConfigurationRequest {
    public DescribeLoggingConfigurationHeaders headers;
    public DescribeLoggingConfigurationRequest withHeaders(DescribeLoggingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLoggingConfigurationRequest request;
    public DescribeLoggingConfigurationRequest withRequest(openapisdk.models.shared.DescribeLoggingConfigurationRequest request) {
        this.request = request;
        return this;
    }
}