package openapisdk.models.operations;



public class DetachObjectResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public DetachObjectResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
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
    public openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException;
    public DetachObjectResponse withDirectoryNotEnabledException(openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public DetachObjectResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public DetachObjectResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public DetachObjectResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.NotNodeException notNodeException;
    public DetachObjectResponse withNotNodeException(openapisdk.models.shared.NotNodeException notNodeException) {
        this.notNodeException = notNodeException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public DetachObjectResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public DetachObjectResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DetachObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public DetachObjectResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}