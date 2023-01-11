package openapisdk.models.operations;



public class DescribeHumanLoopResponse {
    public String contentType;
    public DescribeHumanLoopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeHumanLoopResponse describeHumanLoopResponse;
    public DescribeHumanLoopResponse withDescribeHumanLoopResponse(openapisdk.models.shared.DescribeHumanLoopResponse describeHumanLoopResponse) {
        this.describeHumanLoopResponse = describeHumanLoopResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeHumanLoopResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeHumanLoopResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeHumanLoopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeHumanLoopResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeHumanLoopResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}