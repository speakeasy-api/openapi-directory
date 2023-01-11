package openapisdk.models.operations;



public class DeleteObjectResponse {
    public Object accessDeniedException;
    public DeleteObjectResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteObjectResponse;
    public DeleteObjectResponse withDeleteObjectResponse(java.util.Map<String, Object> deleteObjectResponse) {
        this.deleteObjectResponse = deleteObjectResponse;
        return this;
    }
    public Object directoryNotEnabledException;
    public DeleteObjectResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public DeleteObjectResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public DeleteObjectResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public DeleteObjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object objectNotDetachedException;
    public DeleteObjectResponse withObjectNotDetachedException(Object objectNotDetachedException) {
        this.objectNotDetachedException = objectNotDetachedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteObjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public DeleteObjectResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DeleteObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteObjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}