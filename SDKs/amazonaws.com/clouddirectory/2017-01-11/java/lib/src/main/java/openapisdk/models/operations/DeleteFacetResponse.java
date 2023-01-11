package openapisdk.models.operations;



public class DeleteFacetResponse {
    public Object accessDeniedException;
    public DeleteFacetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteFacetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteFacetResponse;
    public DeleteFacetResponse withDeleteFacetResponse(java.util.Map<String, Object> deleteFacetResponse) {
        this.deleteFacetResponse = deleteFacetResponse;
        return this;
    }
    public Object facetInUseException;
    public DeleteFacetResponse withFacetInUseException(Object facetInUseException) {
        this.facetInUseException = facetInUseException;
        return this;
    }
    public Object facetNotFoundException;
    public DeleteFacetResponse withFacetNotFoundException(Object facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeleteFacetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public DeleteFacetResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public DeleteFacetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFacetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public DeleteFacetResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DeleteFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteFacetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}