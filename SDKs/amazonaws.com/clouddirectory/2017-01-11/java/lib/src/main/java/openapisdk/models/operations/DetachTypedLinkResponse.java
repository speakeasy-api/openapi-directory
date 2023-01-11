package openapisdk.models.operations;



public class DetachTypedLinkResponse {
    public Object accessDeniedException;
    public DetachTypedLinkResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DetachTypedLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public DetachTypedLinkResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public DetachTypedLinkResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public DetachTypedLinkResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public DetachTypedLinkResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public DetachTypedLinkResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DetachTypedLinkResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public DetachTypedLinkResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DetachTypedLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DetachTypedLinkResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}