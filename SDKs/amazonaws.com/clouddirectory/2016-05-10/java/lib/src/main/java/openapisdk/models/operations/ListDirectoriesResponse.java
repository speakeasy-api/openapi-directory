package openapisdk.models.operations;



public class ListDirectoriesResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public ListDirectoriesResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDirectoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public ListDirectoriesResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public ListDirectoriesResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException;
    public ListDirectoriesResponse withInvalidNextTokenException(openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public ListDirectoriesResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListDirectoriesResponse listDirectoriesResponse;
    public ListDirectoriesResponse withListDirectoriesResponse(openapisdk.models.shared.ListDirectoriesResponse listDirectoriesResponse) {
        this.listDirectoriesResponse = listDirectoriesResponse;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public ListDirectoriesResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListDirectoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public ListDirectoriesResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}