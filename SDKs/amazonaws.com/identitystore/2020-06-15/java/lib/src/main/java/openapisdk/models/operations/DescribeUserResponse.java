package openapisdk.models.operations;



public class DescribeUserResponse {
    public Object accessDeniedException;
    public DescribeUserResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUserResponse describeUserResponse;
    public DescribeUserResponse withDescribeUserResponse(openapisdk.models.shared.DescribeUserResponse describeUserResponse) {
        this.describeUserResponse = describeUserResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeUserResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeUserResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeUserResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeUserResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}