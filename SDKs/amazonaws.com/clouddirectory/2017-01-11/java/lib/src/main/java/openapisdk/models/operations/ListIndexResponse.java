package openapisdk.models.operations;



public class ListIndexResponse {
    public Object accessDeniedException;
    public ListIndexResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public ListIndexResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public ListIndexResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public ListIndexResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListIndexResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListIndexResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListIndexResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListIndexResponse listIndexResponse;
    public ListIndexResponse withListIndexResponse(openapisdk.models.shared.ListIndexResponse listIndexResponse) {
        this.listIndexResponse = listIndexResponse;
        return this;
    }
    public Object notIndexException;
    public ListIndexResponse withNotIndexException(Object notIndexException) {
        this.notIndexException = notIndexException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListIndexResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListIndexResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListIndexResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}