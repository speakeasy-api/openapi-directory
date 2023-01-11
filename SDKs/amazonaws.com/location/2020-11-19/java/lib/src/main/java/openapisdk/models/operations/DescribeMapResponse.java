package openapisdk.models.operations;



public class DescribeMapResponse {
    public Object accessDeniedException;
    public DescribeMapResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMapResponse describeMapResponse;
    public DescribeMapResponse withDescribeMapResponse(openapisdk.models.shared.DescribeMapResponse describeMapResponse) {
        this.describeMapResponse = describeMapResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeMapResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeMapResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeMapResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeMapResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}