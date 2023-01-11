package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConfigurationsRequest {
    public DescribeConfigurationsHeaders headers;
    public DescribeConfigurationsRequest withHeaders(DescribeConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConfigurationsRequest request;
    public DescribeConfigurationsRequest withRequest(openapisdk.models.shared.DescribeConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}