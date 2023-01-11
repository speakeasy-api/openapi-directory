package openapisdk.models.operations;



public class ListOutgoingTypedLinksResponse {
    public Object accessDeniedException;
    public ListOutgoingTypedLinksResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListOutgoingTypedLinksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public ListOutgoingTypedLinksResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public ListOutgoingTypedLinksResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public ListOutgoingTypedLinksResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListOutgoingTypedLinksResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListOutgoingTypedLinksResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListOutgoingTypedLinksResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListOutgoingTypedLinksResponse listOutgoingTypedLinksResponse;
    public ListOutgoingTypedLinksResponse withListOutgoingTypedLinksResponse(openapisdk.models.shared.ListOutgoingTypedLinksResponse listOutgoingTypedLinksResponse) {
        this.listOutgoingTypedLinksResponse = listOutgoingTypedLinksResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListOutgoingTypedLinksResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListOutgoingTypedLinksResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListOutgoingTypedLinksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListOutgoingTypedLinksResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}