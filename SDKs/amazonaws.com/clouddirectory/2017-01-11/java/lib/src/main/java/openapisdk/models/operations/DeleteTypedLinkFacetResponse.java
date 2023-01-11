package openapisdk.models.operations;



public class DeleteTypedLinkFacetResponse {
    public Object accessDeniedException;
    public DeleteTypedLinkFacetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteTypedLinkFacetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTypedLinkFacetResponse;
    public DeleteTypedLinkFacetResponse withDeleteTypedLinkFacetResponse(java.util.Map<String, Object> deleteTypedLinkFacetResponse) {
        this.deleteTypedLinkFacetResponse = deleteTypedLinkFacetResponse;
        return this;
    }
    public Object facetNotFoundException;
    public DeleteTypedLinkFacetResponse withFacetNotFoundException(Object facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeleteTypedLinkFacetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public DeleteTypedLinkFacetResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public DeleteTypedLinkFacetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteTypedLinkFacetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public DeleteTypedLinkFacetResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DeleteTypedLinkFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteTypedLinkFacetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}