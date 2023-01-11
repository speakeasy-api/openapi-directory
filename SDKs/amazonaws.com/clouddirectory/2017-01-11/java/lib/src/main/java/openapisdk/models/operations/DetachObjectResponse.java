package openapisdk.models.operations;



public class DetachObjectResponse {
    public Object accessDeniedException;
    public DetachObjectResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DetachObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetachObjectResponse detachObjectResponse;
    public DetachObjectResponse withDetachObjectResponse(openapisdk.models.shared.DetachObjectResponse detachObjectResponse) {
        this.detachObjectResponse = detachObjectResponse;
        return this;
    }
    public Object directoryNotEnabledException;
    public DetachObjectResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public DetachObjectResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public DetachObjectResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public DetachObjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notNodeException;
    public DetachObjectResponse withNotNodeException(Object notNodeException) {
        this.notNodeException = notNodeException;
        return this;
    }
    public Object resourceNotFoundException;
    public DetachObjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public DetachObjectResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DetachObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DetachObjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}