package openapisdk.models.operations;



public class ListFacetAttributesResponse {
    public Object accessDeniedException;
    public ListFacetAttributesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFacetAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object facetNotFoundException;
    public ListFacetAttributesResponse withFacetNotFoundException(Object facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public ListFacetAttributesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListFacetAttributesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListFacetAttributesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListFacetAttributesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListFacetAttributesResponse listFacetAttributesResponse;
    public ListFacetAttributesResponse withListFacetAttributesResponse(openapisdk.models.shared.ListFacetAttributesResponse listFacetAttributesResponse) {
        this.listFacetAttributesResponse = listFacetAttributesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFacetAttributesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListFacetAttributesResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListFacetAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListFacetAttributesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}