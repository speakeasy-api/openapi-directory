package openapisdk.models.operations;



public class DisableDirectoryResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public DisableDirectoryResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisableDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryDeletedException directoryDeletedException;
    public DisableDirectoryResponse withDirectoryDeletedException(openapisdk.models.shared.DirectoryDeletedException directoryDeletedException) {
        this.directoryDeletedException = directoryDeletedException;
        return this;
    }
    public openapisdk.models.shared.DisableDirectoryResponse disableDirectoryResponse;
    public DisableDirectoryResponse withDisableDirectoryResponse(openapisdk.models.shared.DisableDirectoryResponse disableDirectoryResponse) {
        this.disableDirectoryResponse = disableDirectoryResponse;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public DisableDirectoryResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public DisableDirectoryResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public DisableDirectoryResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public DisableDirectoryResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public DisableDirectoryResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DisableDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public DisableDirectoryResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}