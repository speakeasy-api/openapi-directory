package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAuditSuppressionRequest {
    public DescribeAuditSuppressionHeaders headers;
    public DescribeAuditSuppressionRequest withHeaders(DescribeAuditSuppressionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeAuditSuppressionRequestBody request;
    public DescribeAuditSuppressionRequest withRequest(DescribeAuditSuppressionRequestBody request) {
        this.request = request;
        return this;
    }
}