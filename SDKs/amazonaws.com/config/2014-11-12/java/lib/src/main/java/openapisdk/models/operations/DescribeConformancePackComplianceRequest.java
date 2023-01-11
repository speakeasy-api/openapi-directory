package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConformancePackComplianceRequest {
    public DescribeConformancePackComplianceQueryParams queryParams;
    public DescribeConformancePackComplianceRequest withQueryParams(DescribeConformancePackComplianceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeConformancePackComplianceHeaders headers;
    public DescribeConformancePackComplianceRequest withHeaders(DescribeConformancePackComplianceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConformancePackComplianceRequest request;
    public DescribeConformancePackComplianceRequest withRequest(openapisdk.models.shared.DescribeConformancePackComplianceRequest request) {
        this.request = request;
        return this;
    }
}