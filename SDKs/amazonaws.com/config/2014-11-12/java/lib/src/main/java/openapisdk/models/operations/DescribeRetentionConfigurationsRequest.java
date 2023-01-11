package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRetentionConfigurationsRequest {
    public DescribeRetentionConfigurationsQueryParams queryParams;
    public DescribeRetentionConfigurationsRequest withQueryParams(DescribeRetentionConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeRetentionConfigurationsHeaders headers;
    public DescribeRetentionConfigurationsRequest withHeaders(DescribeRetentionConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRetentionConfigurationsRequest request;
    public DescribeRetentionConfigurationsRequest withRequest(openapisdk.models.shared.DescribeRetentionConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}