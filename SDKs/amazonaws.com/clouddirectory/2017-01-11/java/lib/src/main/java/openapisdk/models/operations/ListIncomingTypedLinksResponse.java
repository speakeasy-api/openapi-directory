package openapisdk.models.operations;



public class ListIncomingTypedLinksResponse {
    public Object accessDeniedException;
    public ListIncomingTypedLinksResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListIncomingTypedLinksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public ListIncomingTypedLinksResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public ListIncomingTypedLinksResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public ListIncomingTypedLinksResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListIncomingTypedLinksResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListIncomingTypedLinksResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListIncomingTypedLinksResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListIncomingTypedLinksResponse listIncomingTypedLinksResponse;
    public ListIncomingTypedLinksResponse withListIncomingTypedLinksResponse(openapisdk.models.shared.ListIncomingTypedLinksResponse listIncomingTypedLinksResponse) {
        this.listIncomingTypedLinksResponse = listIncomingTypedLinksResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListIncomingTypedLinksResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListIncomingTypedLinksResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListIncomingTypedLinksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListIncomingTypedLinksResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}