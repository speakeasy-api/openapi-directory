package openapisdk.models.operations;



public class UntagResourceResponse {
    public Object accessDeniedException;
    public UntagResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UntagResourceResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public UntagResourceResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidTaggingRequestException;
    public UntagResourceResponse withInvalidTaggingRequestException(Object invalidTaggingRequestException) {
        this.invalidTaggingRequestException = invalidTaggingRequestException;
        return this;
    }
    public Object limitExceededException;
    public UntagResourceResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UntagResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public UntagResourceResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public UntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> untagResourceResponse;
    public UntagResourceResponse withUntagResourceResponse(java.util.Map<String, Object> untagResourceResponse) {
        this.untagResourceResponse = untagResourceResponse;
        return this;
    }
    public Object validationException;
    public UntagResourceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}