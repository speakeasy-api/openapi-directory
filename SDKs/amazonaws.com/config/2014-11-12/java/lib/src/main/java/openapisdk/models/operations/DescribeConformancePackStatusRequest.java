package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConformancePackStatusRequest {
    public DescribeConformancePackStatusQueryParams queryParams;
    public DescribeConformancePackStatusRequest withQueryParams(DescribeConformancePackStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeConformancePackStatusHeaders headers;
    public DescribeConformancePackStatusRequest withHeaders(DescribeConformancePackStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConformancePackStatusRequest request;
    public DescribeConformancePackStatusRequest withRequest(openapisdk.models.shared.DescribeConformancePackStatusRequest request) {
        this.request = request;
        return this;
    }
}