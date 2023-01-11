package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConformancePacksRequest {
    public DescribeConformancePacksQueryParams queryParams;
    public DescribeConformancePacksRequest withQueryParams(DescribeConformancePacksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeConformancePacksHeaders headers;
    public DescribeConformancePacksRequest withHeaders(DescribeConformancePacksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConformancePacksRequest request;
    public DescribeConformancePacksRequest withRequest(openapisdk.models.shared.DescribeConformancePacksRequest request) {
        this.request = request;
        return this;
    }
}