package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMetricFiltersRequest {
    public DescribeMetricFiltersQueryParams queryParams;
    public DescribeMetricFiltersRequest withQueryParams(DescribeMetricFiltersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeMetricFiltersHeaders headers;
    public DescribeMetricFiltersRequest withHeaders(DescribeMetricFiltersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeMetricFiltersRequest request;
    public DescribeMetricFiltersRequest withRequest(openapisdk.models.shared.DescribeMetricFiltersRequest request) {
        this.request = request;
        return this;
    }
}