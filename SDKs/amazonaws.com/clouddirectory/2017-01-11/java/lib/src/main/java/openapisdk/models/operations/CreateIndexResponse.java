package openapisdk.models.operations;



public class CreateIndexResponse {
    public Object accessDeniedException;
    public CreateIndexResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateIndexResponse createIndexResponse;
    public CreateIndexResponse withCreateIndexResponse(openapisdk.models.shared.CreateIndexResponse createIndexResponse) {
        this.createIndexResponse = createIndexResponse;
        return this;
    }
    public Object directoryNotEnabledException;
    public CreateIndexResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public CreateIndexResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public CreateIndexResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public CreateIndexResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public CreateIndexResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object linkNameAlreadyInUseException;
    public CreateIndexResponse withLinkNameAlreadyInUseException(Object linkNameAlreadyInUseException) {
        this.linkNameAlreadyInUseException = linkNameAlreadyInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateIndexResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public CreateIndexResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public CreateIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedIndexTypeException;
    public CreateIndexResponse withUnsupportedIndexTypeException(Object unsupportedIndexTypeException) {
        this.unsupportedIndexTypeException = unsupportedIndexTypeException;
        return this;
    }
    public Object validationException;
    public CreateIndexResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}