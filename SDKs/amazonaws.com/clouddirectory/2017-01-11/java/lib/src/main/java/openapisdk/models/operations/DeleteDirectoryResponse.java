package openapisdk.models.operations;



public class DeleteDirectoryResponse {
    public Object accessDeniedException;
    public DeleteDirectoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteDirectoryResponse deleteDirectoryResponse;
    public DeleteDirectoryResponse withDeleteDirectoryResponse(openapisdk.models.shared.DeleteDirectoryResponse deleteDirectoryResponse) {
        this.deleteDirectoryResponse = deleteDirectoryResponse;
        return this;
    }
    public Object directoryDeletedException;
    public DeleteDirectoryResponse withDirectoryDeletedException(Object directoryDeletedException) {
        this.directoryDeletedException = directoryDeletedException;
        return this;
    }
    public Object directoryNotDisabledException;
    public DeleteDirectoryResponse withDirectoryNotDisabledException(Object directoryNotDisabledException) {
        this.directoryNotDisabledException = directoryNotDisabledException;
        return this;
    }
    public Object internalServiceException;
    public DeleteDirectoryResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public DeleteDirectoryResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public DeleteDirectoryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteDirectoryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public DeleteDirectoryResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DeleteDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteDirectoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}