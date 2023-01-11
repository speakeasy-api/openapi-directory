package openapisdk.models.operations;



public class DescribePermissionSetResponse {
    public Object accessDeniedException;
    public DescribePermissionSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribePermissionSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePermissionSetResponse describePermissionSetResponse;
    public DescribePermissionSetResponse withDescribePermissionSetResponse(openapisdk.models.shared.DescribePermissionSetResponse describePermissionSetResponse) {
        this.describePermissionSetResponse = describePermissionSetResponse;
        return this;
    }
    public Object internalServerException;
    public DescribePermissionSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePermissionSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePermissionSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribePermissionSetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribePermissionSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}