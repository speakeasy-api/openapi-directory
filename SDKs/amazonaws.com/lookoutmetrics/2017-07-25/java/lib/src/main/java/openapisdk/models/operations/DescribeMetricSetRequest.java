package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMetricSetRequest {
    public DescribeMetricSetHeaders headers;
    public DescribeMetricSetRequest withHeaders(DescribeMetricSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeMetricSetRequestBody request;
    public DescribeMetricSetRequest withRequest(DescribeMetricSetRequestBody request) {
        this.request = request;
        return this;
    }
}