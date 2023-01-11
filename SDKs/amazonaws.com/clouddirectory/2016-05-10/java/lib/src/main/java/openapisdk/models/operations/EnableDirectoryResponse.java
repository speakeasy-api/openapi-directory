package openapisdk.models.operations;



public class EnableDirectoryResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public EnableDirectoryResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public EnableDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryDeletedException directoryDeletedException;
    public EnableDirectoryResponse withDirectoryDeletedException(openapisdk.models.shared.DirectoryDeletedException directoryDeletedException) {
        this.directoryDeletedException = directoryDeletedException;
        return this;
    }
    public openapisdk.models.shared.EnableDirectoryResponse enableDirectoryResponse;
    public EnableDirectoryResponse withEnableDirectoryResponse(openapisdk.models.shared.EnableDirectoryResponse enableDirectoryResponse) {
        this.enableDirectoryResponse = enableDirectoryResponse;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public EnableDirectoryResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public EnableDirectoryResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public EnableDirectoryResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public EnableDirectoryResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public EnableDirectoryResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public EnableDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public EnableDirectoryResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}