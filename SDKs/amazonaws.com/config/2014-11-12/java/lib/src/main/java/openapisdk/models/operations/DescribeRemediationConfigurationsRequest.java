package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRemediationConfigurationsRequest {
    public DescribeRemediationConfigurationsHeaders headers;
    public DescribeRemediationConfigurationsRequest withHeaders(DescribeRemediationConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRemediationConfigurationsRequest request;
    public DescribeRemediationConfigurationsRequest withRequest(openapisdk.models.shared.DescribeRemediationConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}