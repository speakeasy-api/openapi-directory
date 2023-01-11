package openapisdk.models.operations;



public class DescribeRobotApplicationResponse {
    public String contentType;
    public DescribeRobotApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRobotApplicationResponse describeRobotApplicationResponse;
    public DescribeRobotApplicationResponse withDescribeRobotApplicationResponse(openapisdk.models.shared.DescribeRobotApplicationResponse describeRobotApplicationResponse) {
        this.describeRobotApplicationResponse = describeRobotApplicationResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeRobotApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeRobotApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRobotApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRobotApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeRobotApplicationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}