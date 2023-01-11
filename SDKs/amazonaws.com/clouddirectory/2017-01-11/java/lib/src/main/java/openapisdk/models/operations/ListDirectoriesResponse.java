package openapisdk.models.operations;



public class ListDirectoriesResponse {
    public Object accessDeniedException;
    public ListDirectoriesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDirectoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListDirectoriesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListDirectoriesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListDirectoriesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListDirectoriesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListDirectoriesResponse listDirectoriesResponse;
    public ListDirectoriesResponse withListDirectoriesResponse(openapisdk.models.shared.ListDirectoriesResponse listDirectoriesResponse) {
        this.listDirectoriesResponse = listDirectoriesResponse;
        return this;
    }
    public Object retryableConflictException;
    public ListDirectoriesResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListDirectoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListDirectoriesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}