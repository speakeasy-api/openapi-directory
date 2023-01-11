package openapisdk.models.operations;



public class AttachPolicyResponse {
    public Object accessDeniedException;
    public AttachPolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> attachPolicyResponse;
    public AttachPolicyResponse withAttachPolicyResponse(java.util.Map<String, Object> attachPolicyResponse) {
        this.attachPolicyResponse = attachPolicyResponse;
        return this;
    }
    public String contentType;
    public AttachPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public AttachPolicyResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public AttachPolicyResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public AttachPolicyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public AttachPolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notPolicyException;
    public AttachPolicyResponse withNotPolicyException(Object notPolicyException) {
        this.notPolicyException = notPolicyException;
        return this;
    }
    public Object resourceNotFoundException;
    public AttachPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public AttachPolicyResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public AttachPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AttachPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}