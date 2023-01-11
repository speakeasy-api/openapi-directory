package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRemediationExecutionStatusRequest {
    public DescribeRemediationExecutionStatusQueryParams queryParams;
    public DescribeRemediationExecutionStatusRequest withQueryParams(DescribeRemediationExecutionStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeRemediationExecutionStatusHeaders headers;
    public DescribeRemediationExecutionStatusRequest withHeaders(DescribeRemediationExecutionStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRemediationExecutionStatusRequest request;
    public DescribeRemediationExecutionStatusRequest withRequest(openapisdk.models.shared.DescribeRemediationExecutionStatusRequest request) {
        this.request = request;
        return this;
    }
}