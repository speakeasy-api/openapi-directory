package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAggregateComplianceByConformancePacksRequest {
    public DescribeAggregateComplianceByConformancePacksQueryParams queryParams;
    public DescribeAggregateComplianceByConformancePacksRequest withQueryParams(DescribeAggregateComplianceByConformancePacksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeAggregateComplianceByConformancePacksHeaders headers;
    public DescribeAggregateComplianceByConformancePacksRequest withHeaders(DescribeAggregateComplianceByConformancePacksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAggregateComplianceByConformancePacksRequest request;
    public DescribeAggregateComplianceByConformancePacksRequest withRequest(openapisdk.models.shared.DescribeAggregateComplianceByConformancePacksRequest request) {
        this.request = request;
        return this;
    }
}