package openapisdk.models.operations;



public class DescribeRobotResponse {
    public String contentType;
    public DescribeRobotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRobotResponse describeRobotResponse;
    public DescribeRobotResponse withDescribeRobotResponse(openapisdk.models.shared.DescribeRobotResponse describeRobotResponse) {
        this.describeRobotResponse = describeRobotResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeRobotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeRobotResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRobotResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRobotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeRobotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}