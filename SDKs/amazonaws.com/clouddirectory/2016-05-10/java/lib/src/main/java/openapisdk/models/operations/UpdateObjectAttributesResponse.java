package openapisdk.models.operations;



public class UpdateObjectAttributesResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public UpdateObjectAttributesResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateObjectAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException;
    public UpdateObjectAttributesResponse withDirectoryNotEnabledException(openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.FacetValidationException facetValidationException;
    public UpdateObjectAttributesResponse withFacetValidationException(openapisdk.models.shared.FacetValidationException facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public UpdateObjectAttributesResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public UpdateObjectAttributesResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public UpdateObjectAttributesResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.LinkNameAlreadyInUseException linkNameAlreadyInUseException;
    public UpdateObjectAttributesResponse withLinkNameAlreadyInUseException(openapisdk.models.shared.LinkNameAlreadyInUseException linkNameAlreadyInUseException) {
        this.linkNameAlreadyInUseException = linkNameAlreadyInUseException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public UpdateObjectAttributesResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public UpdateObjectAttributesResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
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
    public openapisdk.models.shared.ValidationException validationException;
    public UpdateObjectAttributesResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}