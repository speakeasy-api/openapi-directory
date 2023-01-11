package openapisdk.models.operations;



public class RemoveFacetFromObjectResponse {
    public Object accessDeniedException;
    public RemoveFacetFromObjectResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RemoveFacetFromObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public RemoveFacetFromObjectResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public RemoveFacetFromObjectResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public RemoveFacetFromObjectResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public RemoveFacetFromObjectResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public RemoveFacetFromObjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public java.util.Map<String, Object> removeFacetFromObjectResponse;
    public RemoveFacetFromObjectResponse withRemoveFacetFromObjectResponse(java.util.Map<String, Object> removeFacetFromObjectResponse) {
        this.removeFacetFromObjectResponse = removeFacetFromObjectResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RemoveFacetFromObjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public RemoveFacetFromObjectResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public RemoveFacetFromObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RemoveFacetFromObjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}