package openapisdk.models.operations;



public class ListObjectPoliciesResponse {
    public Object accessDeniedException;
    public ListObjectPoliciesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListObjectPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public ListObjectPoliciesResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public ListObjectPoliciesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListObjectPoliciesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListObjectPoliciesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListObjectPoliciesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListObjectPoliciesResponse listObjectPoliciesResponse;
    public ListObjectPoliciesResponse withListObjectPoliciesResponse(openapisdk.models.shared.ListObjectPoliciesResponse listObjectPoliciesResponse) {
        this.listObjectPoliciesResponse = listObjectPoliciesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListObjectPoliciesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListObjectPoliciesResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListObjectPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListObjectPoliciesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}