package openapisdk.models.operations;



public class DetachPolicyResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public DetachPolicyResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
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
    public openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException;
    public DetachPolicyResponse withDirectoryNotEnabledException(openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public DetachPolicyResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public DetachPolicyResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public DetachPolicyResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.NotPolicyException notPolicyException;
    public DetachPolicyResponse withNotPolicyException(openapisdk.models.shared.NotPolicyException notPolicyException) {
        this.notPolicyException = notPolicyException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public DetachPolicyResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public DetachPolicyResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DetachPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public DetachPolicyResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}