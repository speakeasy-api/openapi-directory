package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAggregationAuthorizationsRequest {
    public DescribeAggregationAuthorizationsQueryParams queryParams;
    public DescribeAggregationAuthorizationsRequest withQueryParams(DescribeAggregationAuthorizationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeAggregationAuthorizationsHeaders headers;
    public DescribeAggregationAuthorizationsRequest withHeaders(DescribeAggregationAuthorizationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAggregationAuthorizationsRequest request;
    public DescribeAggregationAuthorizationsRequest withRequest(openapisdk.models.shared.DescribeAggregationAuthorizationsRequest request) {
        this.request = request;
        return this;
    }
}