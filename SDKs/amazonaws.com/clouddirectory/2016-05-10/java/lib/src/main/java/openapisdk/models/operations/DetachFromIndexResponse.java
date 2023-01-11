package openapisdk.models.operations;



public class DetachFromIndexResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public DetachFromIndexResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DetachFromIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetachFromIndexResponse detachFromIndexResponse;
    public DetachFromIndexResponse withDetachFromIndexResponse(openapisdk.models.shared.DetachFromIndexResponse detachFromIndexResponse) {
        this.detachFromIndexResponse = detachFromIndexResponse;
        return this;
    }
    public openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException;
    public DetachFromIndexResponse withDirectoryNotEnabledException(openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public DetachFromIndexResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public DetachFromIndexResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public DetachFromIndexResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.NotIndexException notIndexException;
    public DetachFromIndexResponse withNotIndexException(openapisdk.models.shared.NotIndexException notIndexException) {
        this.notIndexException = notIndexException;
        return this;
    }
    public openapisdk.models.shared.ObjectAlreadyDetachedException objectAlreadyDetachedException;
    public DetachFromIndexResponse withObjectAlreadyDetachedException(openapisdk.models.shared.ObjectAlreadyDetachedException objectAlreadyDetachedException) {
        this.objectAlreadyDetachedException = objectAlreadyDetachedException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public DetachFromIndexResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public DetachFromIndexResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DetachFromIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public DetachFromIndexResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}