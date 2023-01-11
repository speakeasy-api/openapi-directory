package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConfigurationAggregatorSourcesStatusRequest {
    public DescribeConfigurationAggregatorSourcesStatusQueryParams queryParams;
    public DescribeConfigurationAggregatorSourcesStatusRequest withQueryParams(DescribeConfigurationAggregatorSourcesStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeConfigurationAggregatorSourcesStatusHeaders headers;
    public DescribeConfigurationAggregatorSourcesStatusRequest withHeaders(DescribeConfigurationAggregatorSourcesStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConfigurationAggregatorSourcesStatusRequest request;
    public DescribeConfigurationAggregatorSourcesStatusRequest withRequest(openapisdk.models.shared.DescribeConfigurationAggregatorSourcesStatusRequest request) {
        this.request = request;
        return this;
    }
}