package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStateMachineForExecutionRequest {
    public DescribeStateMachineForExecutionHeaders headers;
    public DescribeStateMachineForExecutionRequest withHeaders(DescribeStateMachineForExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeStateMachineForExecutionInput request;
    public DescribeStateMachineForExecutionRequest withRequest(openapisdk.models.shared.DescribeStateMachineForExecutionInput request) {
        this.request = request;
        return this;
    }
}