package openapisdk.models.operations;



public class CreateDirectoryResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public CreateDirectoryResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDirectoryResponse createDirectoryResponse;
    public CreateDirectoryResponse withCreateDirectoryResponse(openapisdk.models.shared.CreateDirectoryResponse createDirectoryResponse) {
        this.createDirectoryResponse = createDirectoryResponse;
        return this;
    }
    public openapisdk.models.shared.DirectoryAlreadyExistsException directoryAlreadyExistsException;
    public CreateDirectoryResponse withDirectoryAlreadyExistsException(openapisdk.models.shared.DirectoryAlreadyExistsException directoryAlreadyExistsException) {
        this.directoryAlreadyExistsException = directoryAlreadyExistsException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public CreateDirectoryResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public CreateDirectoryResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public CreateDirectoryResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public CreateDirectoryResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public CreateDirectoryResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public CreateDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public CreateDirectoryResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}