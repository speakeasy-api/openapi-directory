package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkflowExecutionRequest {
    public DescribeWorkflowExecutionHeaders headers;
    public DescribeWorkflowExecutionRequest withHeaders(DescribeWorkflowExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeWorkflowExecutionInput request;
    public DescribeWorkflowExecutionRequest withRequest(openapisdk.models.shared.DescribeWorkflowExecutionInput request) {
        this.request = request;
        return this;
    }
}