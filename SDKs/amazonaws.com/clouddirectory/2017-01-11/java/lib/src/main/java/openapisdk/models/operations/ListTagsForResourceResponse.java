package openapisdk.models.operations;



public class ListTagsForResourceResponse {
    public Object accessDeniedException;
    public ListTagsForResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListTagsForResourceResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListTagsForResourceResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidTaggingRequestException;
    public ListTagsForResourceResponse withInvalidTaggingRequestException(Object invalidTaggingRequestException) {
        this.invalidTaggingRequestException = invalidTaggingRequestException;
        return this;
    }
    public Object limitExceededException;
    public ListTagsForResourceResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForResourceResponse listTagsForResourceResponse;
    public ListTagsForResourceResponse withListTagsForResourceResponse(openapisdk.models.shared.ListTagsForResourceResponse listTagsForResourceResponse) {
        this.listTagsForResourceResponse = listTagsForResourceResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsForResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListTagsForResourceResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListTagsForResourceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}