package openapisdk.models.operations;



public class CreateObjectResponse {
    public Object accessDeniedException;
    public CreateObjectResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateObjectResponse createObjectResponse;
    public CreateObjectResponse withCreateObjectResponse(openapisdk.models.shared.CreateObjectResponse createObjectResponse) {
        this.createObjectResponse = createObjectResponse;
        return this;
    }
    public Object directoryNotEnabledException;
    public CreateObjectResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public CreateObjectResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public CreateObjectResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public CreateObjectResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public CreateObjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object linkNameAlreadyInUseException;
    public CreateObjectResponse withLinkNameAlreadyInUseException(Object linkNameAlreadyInUseException) {
        this.linkNameAlreadyInUseException = linkNameAlreadyInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateObjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public CreateObjectResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public CreateObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedIndexTypeException;
    public CreateObjectResponse withUnsupportedIndexTypeException(Object unsupportedIndexTypeException) {
        this.unsupportedIndexTypeException = unsupportedIndexTypeException;
        return this;
    }
    public Object validationException;
    public CreateObjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}