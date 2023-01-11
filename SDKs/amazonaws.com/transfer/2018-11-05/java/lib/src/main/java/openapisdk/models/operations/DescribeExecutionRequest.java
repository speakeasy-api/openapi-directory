package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeExecutionRequest {
    public DescribeExecutionHeaders headers;
    public DescribeExecutionRequest withHeaders(DescribeExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeExecutionRequest request;
    public DescribeExecutionRequest withRequest(openapisdk.models.shared.DescribeExecutionRequest request) {
        this.request = request;
        return this;
    }
}