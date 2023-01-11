package openapisdk.models.operations;



public class ListFacetNamesResponse {
    public Object accessDeniedException;
    public ListFacetNamesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFacetNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListFacetNamesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListFacetNamesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListFacetNamesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListFacetNamesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListFacetNamesResponse listFacetNamesResponse;
    public ListFacetNamesResponse withListFacetNamesResponse(openapisdk.models.shared.ListFacetNamesResponse listFacetNamesResponse) {
        this.listFacetNamesResponse = listFacetNamesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFacetNamesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListFacetNamesResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListFacetNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListFacetNamesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}