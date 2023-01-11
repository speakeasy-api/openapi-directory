package openapisdk.models.operations;



public class DisableDirectoryResponse {
    public Object accessDeniedException;
    public DisableDirectoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisableDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryDeletedException;
    public DisableDirectoryResponse withDirectoryDeletedException(Object directoryDeletedException) {
        this.directoryDeletedException = directoryDeletedException;
        return this;
    }
    public openapisdk.models.shared.DisableDirectoryResponse disableDirectoryResponse;
    public DisableDirectoryResponse withDisableDirectoryResponse(openapisdk.models.shared.DisableDirectoryResponse disableDirectoryResponse) {
        this.disableDirectoryResponse = disableDirectoryResponse;
        return this;
    }
    public Object internalServiceException;
    public DisableDirectoryResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public DisableDirectoryResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public DisableDirectoryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisableDirectoryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public DisableDirectoryResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DisableDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DisableDirectoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}