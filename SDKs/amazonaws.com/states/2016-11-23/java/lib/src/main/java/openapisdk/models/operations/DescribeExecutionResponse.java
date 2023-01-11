package openapisdk.models.operations;



public class DescribeExecutionResponse {
    public String contentType;
    public DescribeExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeExecutionOutput describeExecutionOutput;
    public DescribeExecutionResponse withDescribeExecutionOutput(openapisdk.models.shared.DescribeExecutionOutput describeExecutionOutput) {
        this.describeExecutionOutput = describeExecutionOutput;
        return this;
    }
    public Object executionDoesNotExist;
    public DescribeExecutionResponse withExecutionDoesNotExist(Object executionDoesNotExist) {
        this.executionDoesNotExist = executionDoesNotExist;
        return this;
    }
    public Object invalidArn;
    public DescribeExecutionResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Long statusCode;
    public DescribeExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}