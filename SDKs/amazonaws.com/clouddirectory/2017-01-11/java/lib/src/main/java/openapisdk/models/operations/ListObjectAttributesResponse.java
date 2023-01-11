package openapisdk.models.operations;



public class ListObjectAttributesResponse {
    public Object accessDeniedException;
    public ListObjectAttributesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListObjectAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public ListObjectAttributesResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public ListObjectAttributesResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public ListObjectAttributesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListObjectAttributesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListObjectAttributesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListObjectAttributesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListObjectAttributesResponse listObjectAttributesResponse;
    public ListObjectAttributesResponse withListObjectAttributesResponse(openapisdk.models.shared.ListObjectAttributesResponse listObjectAttributesResponse) {
        this.listObjectAttributesResponse = listObjectAttributesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListObjectAttributesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListObjectAttributesResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListObjectAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListObjectAttributesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}