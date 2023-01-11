package openapisdk.models.operations;



public class UpdateObjectAttributesResponse {
    public Object accessDeniedException;
    public UpdateObjectAttributesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateObjectAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public UpdateObjectAttributesResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public UpdateObjectAttributesResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public UpdateObjectAttributesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public UpdateObjectAttributesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public UpdateObjectAttributesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object linkNameAlreadyInUseException;
    public UpdateObjectAttributesResponse withLinkNameAlreadyInUseException(Object linkNameAlreadyInUseException) {
        this.linkNameAlreadyInUseException = linkNameAlreadyInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateObjectAttributesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public UpdateObjectAttributesResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public UpdateObjectAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateObjectAttributesResponse updateObjectAttributesResponse;
    public UpdateObjectAttributesResponse withUpdateObjectAttributesResponse(openapisdk.models.shared.UpdateObjectAttributesResponse updateObjectAttributesResponse) {
        this.updateObjectAttributesResponse = updateObjectAttributesResponse;
        return this;
    }
    public Object validationException;
    public UpdateObjectAttributesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}