package openapisdk.models.operations;



public class UpdateFacetResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public UpdateFacetResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateFacetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FacetNotFoundException facetNotFoundException;
    public UpdateFacetResponse withFacetNotFoundException(openapisdk.models.shared.FacetNotFoundException facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public UpdateFacetResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public UpdateFacetResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidFacetUpdateException invalidFacetUpdateException;
    public UpdateFacetResponse withInvalidFacetUpdateException(openapisdk.models.shared.InvalidFacetUpdateException invalidFacetUpdateException) {
        this.invalidFacetUpdateException = invalidFacetUpdateException;
        return this;
    }
    public openapisdk.models.shared.InvalidRuleException invalidRuleException;
    public UpdateFacetResponse withInvalidRuleException(openapisdk.models.shared.InvalidRuleException invalidRuleException) {
        this.invalidRuleException = invalidRuleException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public UpdateFacetResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public UpdateFacetResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public UpdateFacetResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public UpdateFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateFacetResponse;
    public UpdateFacetResponse withUpdateFacetResponse(java.util.Map<String, Object> updateFacetResponse) {
        this.updateFacetResponse = updateFacetResponse;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public UpdateFacetResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}