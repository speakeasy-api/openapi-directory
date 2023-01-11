package openapisdk.models.operations;



public class TagResourceResponse {
    public Object accessDeniedException;
    public TagResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public TagResourceResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public TagResourceResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidTaggingRequestException;
    public TagResourceResponse withInvalidTaggingRequestException(Object invalidTaggingRequestException) {
        this.invalidTaggingRequestException = invalidTaggingRequestException;
        return this;
    }
    public Object limitExceededException;
    public TagResourceResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public TagResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public TagResourceResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public TagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> tagResourceResponse;
    public TagResourceResponse withTagResourceResponse(java.util.Map<String, Object> tagResourceResponse) {
        this.tagResourceResponse = tagResourceResponse;
        return this;
    }
    public Object validationException;
    public TagResourceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}