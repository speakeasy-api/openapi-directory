package openapisdk.models.operations;



public class DeleteDirectoryResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public DeleteDirectoryResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
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
    public openapisdk.models.shared.DirectoryDeletedException directoryDeletedException;
    public DeleteDirectoryResponse withDirectoryDeletedException(openapisdk.models.shared.DirectoryDeletedException directoryDeletedException) {
        this.directoryDeletedException = directoryDeletedException;
        return this;
    }
    public openapisdk.models.shared.DirectoryNotDisabledException directoryNotDisabledException;
    public DeleteDirectoryResponse withDirectoryNotDisabledException(openapisdk.models.shared.DirectoryNotDisabledException directoryNotDisabledException) {
        this.directoryNotDisabledException = directoryNotDisabledException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public DeleteDirectoryResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public DeleteDirectoryResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public DeleteDirectoryResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public DeleteDirectoryResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public DeleteDirectoryResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DeleteDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public DeleteDirectoryResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}