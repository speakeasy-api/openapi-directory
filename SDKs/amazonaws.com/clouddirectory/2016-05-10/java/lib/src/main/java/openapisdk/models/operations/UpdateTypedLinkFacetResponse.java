package openapisdk.models.operations;



public class UpdateTypedLinkFacetResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public UpdateTypedLinkFacetResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateTypedLinkFacetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FacetNotFoundException facetNotFoundException;
    public UpdateTypedLinkFacetResponse withFacetNotFoundException(openapisdk.models.shared.FacetNotFoundException facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    public openapisdk.models.shared.FacetValidationException facetValidationException;
    public UpdateTypedLinkFacetResponse withFacetValidationException(openapisdk.models.shared.FacetValidationException facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public UpdateTypedLinkFacetResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public UpdateTypedLinkFacetResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidFacetUpdateException invalidFacetUpdateException;
    public UpdateTypedLinkFacetResponse withInvalidFacetUpdateException(openapisdk.models.shared.InvalidFacetUpdateException invalidFacetUpdateException) {
        this.invalidFacetUpdateException = invalidFacetUpdateException;
        return this;
    }
    public openapisdk.models.shared.InvalidRuleException invalidRuleException;
    public UpdateTypedLinkFacetResponse withInvalidRuleException(openapisdk.models.shared.InvalidRuleException invalidRuleException) {
        this.invalidRuleException = invalidRuleException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public UpdateTypedLinkFacetResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public UpdateTypedLinkFacetResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public UpdateTypedLinkFacetResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public UpdateTypedLinkFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateTypedLinkFacetResponse;
    public UpdateTypedLinkFacetResponse withUpdateTypedLinkFacetResponse(java.util.Map<String, Object> updateTypedLinkFacetResponse) {
        this.updateTypedLinkFacetResponse = updateTypedLinkFacetResponse;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public UpdateTypedLinkFacetResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}