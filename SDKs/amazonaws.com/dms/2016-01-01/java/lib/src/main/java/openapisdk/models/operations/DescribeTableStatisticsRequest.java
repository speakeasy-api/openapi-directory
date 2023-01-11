package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTableStatisticsRequest {
    public DescribeTableStatisticsQueryParams queryParams;
    public DescribeTableStatisticsRequest withQueryParams(DescribeTableStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeTableStatisticsHeaders headers;
    public DescribeTableStatisticsRequest withHeaders(DescribeTableStatisticsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTableStatisticsMessage request;
    public DescribeTableStatisticsRequest withRequest(openapisdk.models.shared.DescribeTableStatisticsMessage request) {
        this.request = request;
        return this;
    }
}