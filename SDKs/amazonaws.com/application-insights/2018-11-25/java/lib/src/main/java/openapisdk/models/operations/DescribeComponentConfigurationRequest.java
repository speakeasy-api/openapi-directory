package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeComponentConfigurationRequest {
    public DescribeComponentConfigurationHeaders headers;
    public DescribeComponentConfigurationRequest withHeaders(DescribeComponentConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeComponentConfigurationRequest request;
    public DescribeComponentConfigurationRequest withRequest(openapisdk.models.shared.DescribeComponentConfigurationRequest request) {
        this.request = request;
        return this;
    }
}