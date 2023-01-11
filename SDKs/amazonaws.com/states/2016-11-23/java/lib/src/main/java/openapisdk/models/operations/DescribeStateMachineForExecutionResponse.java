package openapisdk.models.operations;



public class DescribeStateMachineForExecutionResponse {
    public String contentType;
    public DescribeStateMachineForExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStateMachineForExecutionOutput describeStateMachineForExecutionOutput;
    public DescribeStateMachineForExecutionResponse withDescribeStateMachineForExecutionOutput(openapisdk.models.shared.DescribeStateMachineForExecutionOutput describeStateMachineForExecutionOutput) {
        this.describeStateMachineForExecutionOutput = describeStateMachineForExecutionOutput;
        return this;
    }
    public Object executionDoesNotExist;
    public DescribeStateMachineForExecutionResponse withExecutionDoesNotExist(Object executionDoesNotExist) {
        this.executionDoesNotExist = executionDoesNotExist;
        return this;
    }
    public Object invalidArn;
    public DescribeStateMachineForExecutionResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Long statusCode;
    public DescribeStateMachineForExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}