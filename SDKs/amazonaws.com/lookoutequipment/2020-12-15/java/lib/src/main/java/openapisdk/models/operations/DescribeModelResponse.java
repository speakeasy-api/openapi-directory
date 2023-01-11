package openapisdk.models.operations;



public class DescribeModelResponse {
    public Object accessDeniedException;
    public DescribeModelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeModelResponse describeModelResponse;
    public DescribeModelResponse withDescribeModelResponse(openapisdk.models.shared.DescribeModelResponse describeModelResponse) {
        this.describeModelResponse = describeModelResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeModelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeModelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeModelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeModelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}