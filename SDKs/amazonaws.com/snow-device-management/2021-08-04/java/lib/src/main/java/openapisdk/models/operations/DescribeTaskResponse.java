package openapisdk.models.operations;



public class DescribeTaskResponse {
    public Object accessDeniedException;
    public DescribeTaskResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTaskOutput describeTaskOutput;
    public DescribeTaskResponse withDescribeTaskOutput(openapisdk.models.shared.DescribeTaskOutput describeTaskOutput) {
        this.describeTaskOutput = describeTaskOutput;
        return this;
    }
    public Object internalServerException;
    public DescribeTaskResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeTaskResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}