package openapisdk.models.operations;



public class ListTypedLinkFacetNamesResponse {
    public Object accessDeniedException;
    public ListTypedLinkFacetNamesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListTypedLinkFacetNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListTypedLinkFacetNamesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListTypedLinkFacetNamesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListTypedLinkFacetNamesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListTypedLinkFacetNamesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListTypedLinkFacetNamesResponse listTypedLinkFacetNamesResponse;
    public ListTypedLinkFacetNamesResponse withListTypedLinkFacetNamesResponse(openapisdk.models.shared.ListTypedLinkFacetNamesResponse listTypedLinkFacetNamesResponse) {
        this.listTypedLinkFacetNamesResponse = listTypedLinkFacetNamesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTypedLinkFacetNamesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListTypedLinkFacetNamesResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListTypedLinkFacetNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListTypedLinkFacetNamesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}