package openapisdk.models.operations;



public class DescribeStateMachineResponse {
    public String contentType;
    public DescribeStateMachineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStateMachineOutput describeStateMachineOutput;
    public DescribeStateMachineResponse withDescribeStateMachineOutput(openapisdk.models.shared.DescribeStateMachineOutput describeStateMachineOutput) {
        this.describeStateMachineOutput = describeStateMachineOutput;
        return this;
    }
    public Object invalidArn;
    public DescribeStateMachineResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Object stateMachineDoesNotExist;
    public DescribeStateMachineResponse withStateMachineDoesNotExist(Object stateMachineDoesNotExist) {
        this.stateMachineDoesNotExist = stateMachineDoesNotExist;
        return this;
    }
    public Long statusCode;
    public DescribeStateMachineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}