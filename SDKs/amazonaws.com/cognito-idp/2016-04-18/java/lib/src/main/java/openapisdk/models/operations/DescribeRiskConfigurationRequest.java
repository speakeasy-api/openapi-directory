package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRiskConfigurationRequest {
    public DescribeRiskConfigurationHeaders headers;
    public DescribeRiskConfigurationRequest withHeaders(DescribeRiskConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRiskConfigurationRequest request;
    public DescribeRiskConfigurationRequest withRequest(openapisdk.models.shared.DescribeRiskConfigurationRequest request) {
        this.request = request;
        return this;
    }
}