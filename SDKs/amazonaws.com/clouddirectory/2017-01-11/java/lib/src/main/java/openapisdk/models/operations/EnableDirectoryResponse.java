package openapisdk.models.operations;



public class EnableDirectoryResponse {
    public Object accessDeniedException;
    public EnableDirectoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public EnableDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryDeletedException;
    public EnableDirectoryResponse withDirectoryDeletedException(Object directoryDeletedException) {
        this.directoryDeletedException = directoryDeletedException;
        return this;
    }
    public openapisdk.models.shared.EnableDirectoryResponse enableDirectoryResponse;
    public EnableDirectoryResponse withEnableDirectoryResponse(openapisdk.models.shared.EnableDirectoryResponse enableDirectoryResponse) {
        this.enableDirectoryResponse = enableDirectoryResponse;
        return this;
    }
    public Object internalServiceException;
    public EnableDirectoryResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public EnableDirectoryResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public EnableDirectoryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public EnableDirectoryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public EnableDirectoryResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public EnableDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public EnableDirectoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}