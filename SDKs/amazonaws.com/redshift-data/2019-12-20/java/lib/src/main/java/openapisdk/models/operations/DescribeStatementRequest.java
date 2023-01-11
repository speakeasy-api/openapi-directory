package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStatementRequest {
    public DescribeStatementHeaders headers;
    public DescribeStatementRequest withHeaders(DescribeStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeStatementRequest request;
    public DescribeStatementRequest withRequest(openapisdk.models.shared.DescribeStatementRequest request) {
        this.request = request;
        return this;
    }
}