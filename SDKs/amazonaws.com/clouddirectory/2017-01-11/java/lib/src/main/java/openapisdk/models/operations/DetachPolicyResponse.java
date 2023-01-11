package openapisdk.models.operations;



public class DetachPolicyResponse {
    public Object accessDeniedException;
    public DetachPolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DetachPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> detachPolicyResponse;
    public DetachPolicyResponse withDetachPolicyResponse(java.util.Map<String, Object> detachPolicyResponse) {
        this.detachPolicyResponse = detachPolicyResponse;
        return this;
    }
    public Object directoryNotEnabledException;
    public DetachPolicyResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public DetachPolicyResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public DetachPolicyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public DetachPolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notPolicyException;
    public DetachPolicyResponse withNotPolicyException(Object notPolicyException) {
        this.notPolicyException = notPolicyException;
        return this;
    }
    public Object resourceNotFoundException;
    public DetachPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public DetachPolicyResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DetachPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DetachPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}