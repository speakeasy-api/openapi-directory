package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRuntimeConfigurationRequest {
    public DescribeRuntimeConfigurationHeaders headers;
    public DescribeRuntimeConfigurationRequest withHeaders(DescribeRuntimeConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRuntimeConfigurationInput request;
    public DescribeRuntimeConfigurationRequest withRequest(openapisdk.models.shared.DescribeRuntimeConfigurationInput request) {
        this.request = request;
        return this;
    }
}