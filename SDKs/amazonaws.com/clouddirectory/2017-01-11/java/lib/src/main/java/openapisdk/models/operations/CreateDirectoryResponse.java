package openapisdk.models.operations;



public class CreateDirectoryResponse {
    public Object accessDeniedException;
    public CreateDirectoryResponse withAccessDeniedException(Object accessDeniedException) {
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
    public Object directoryAlreadyExistsException;
    public CreateDirectoryResponse withDirectoryAlreadyExistsException(Object directoryAlreadyExistsException) {
        this.directoryAlreadyExistsException = directoryAlreadyExistsException;
        return this;
    }
    public Object internalServiceException;
    public CreateDirectoryResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public CreateDirectoryResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public CreateDirectoryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateDirectoryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public CreateDirectoryResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public CreateDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateDirectoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}