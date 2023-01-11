package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConfigurationRecorderStatusRequest {
    public DescribeConfigurationRecorderStatusHeaders headers;
    public DescribeConfigurationRecorderStatusRequest withHeaders(DescribeConfigurationRecorderStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConfigurationRecorderStatusRequest request;
    public DescribeConfigurationRecorderStatusRequest withRequest(openapisdk.models.shared.DescribeConfigurationRecorderStatusRequest request) {
        this.request = request;
        return this;
    }
}