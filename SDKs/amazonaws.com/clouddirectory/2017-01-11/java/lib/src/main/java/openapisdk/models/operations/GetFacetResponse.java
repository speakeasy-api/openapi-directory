package openapisdk.models.operations;



public class GetFacetResponse {
    public Object accessDeniedException;
    public GetFacetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFacetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object facetNotFoundException;
    public GetFacetResponse withFacetNotFoundException(Object facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetFacetResponse getFacetResponse;
    public GetFacetResponse withGetFacetResponse(openapisdk.models.shared.GetFacetResponse getFacetResponse) {
        this.getFacetResponse = getFacetResponse;
        return this;
    }
    public Object internalServiceException;
    public GetFacetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public GetFacetResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public GetFacetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFacetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public GetFacetResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public GetFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetFacetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}