package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeComplianceByResourceRequest {
    public DescribeComplianceByResourceQueryParams queryParams;
    public DescribeComplianceByResourceRequest withQueryParams(DescribeComplianceByResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeComplianceByResourceHeaders headers;
    public DescribeComplianceByResourceRequest withHeaders(DescribeComplianceByResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeComplianceByResourceRequest request;
    public DescribeComplianceByResourceRequest withRequest(openapisdk.models.shared.DescribeComplianceByResourceRequest request) {
        this.request = request;
        return this;
    }
}