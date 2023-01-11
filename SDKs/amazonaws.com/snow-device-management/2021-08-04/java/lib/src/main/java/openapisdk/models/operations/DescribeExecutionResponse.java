package openapisdk.models.operations;



public class DescribeExecutionResponse {
    public Object accessDeniedException;
    public DescribeExecutionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
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
    public Object internalServerException;
    public DescribeExecutionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeExecutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeExecutionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeExecutionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}