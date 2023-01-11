package openapisdk.models.operations;



public class DetachFromIndexResponse {
    public Object accessDeniedException;
    public DetachFromIndexResponse withAccessDeniedException(Object accessDeniedException) {
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
    public Object directoryNotEnabledException;
    public DetachFromIndexResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public DetachFromIndexResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public DetachFromIndexResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public DetachFromIndexResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notIndexException;
    public DetachFromIndexResponse withNotIndexException(Object notIndexException) {
        this.notIndexException = notIndexException;
        return this;
    }
    public Object objectAlreadyDetachedException;
    public DetachFromIndexResponse withObjectAlreadyDetachedException(Object objectAlreadyDetachedException) {
        this.objectAlreadyDetachedException = objectAlreadyDetachedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DetachFromIndexResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public DetachFromIndexResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DetachFromIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DetachFromIndexResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}