package openapisdk.models.operations;



public class DescribeChangeSetResponse {
    public Object accessDeniedException;
    public DescribeChangeSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeChangeSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeChangeSetResponse describeChangeSetResponse;
    public DescribeChangeSetResponse withDescribeChangeSetResponse(openapisdk.models.shared.DescribeChangeSetResponse describeChangeSetResponse) {
        this.describeChangeSetResponse = describeChangeSetResponse;
        return this;
    }
    public Object internalServiceException;
    public DescribeChangeSetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeChangeSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeChangeSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeChangeSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeChangeSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}