package openapisdk.models.operations;



public class DescribeEntityResponse {
    public Object accessDeniedException;
    public DescribeEntityResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeEntityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEntityResponse describeEntityResponse;
    public DescribeEntityResponse withDescribeEntityResponse(openapisdk.models.shared.DescribeEntityResponse describeEntityResponse) {
        this.describeEntityResponse = describeEntityResponse;
        return this;
    }
    public Object internalServiceException;
    public DescribeEntityResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeEntityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceNotSupportedException;
    public DescribeEntityResponse withResourceNotSupportedException(Object resourceNotSupportedException) {
        this.resourceNotSupportedException = resourceNotSupportedException;
        return this;
    }
    public Long statusCode;
    public DescribeEntityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeEntityResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeEntityResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}