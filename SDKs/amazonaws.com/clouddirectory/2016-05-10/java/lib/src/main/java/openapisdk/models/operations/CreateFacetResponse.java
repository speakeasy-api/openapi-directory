package openapisdk.models.operations;



public class CreateFacetResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public CreateFacetResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateFacetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createFacetResponse;
    public CreateFacetResponse withCreateFacetResponse(java.util.Map<String, Object> createFacetResponse) {
        this.createFacetResponse = createFacetResponse;
        return this;
    }
    public openapisdk.models.shared.FacetAlreadyExistsException facetAlreadyExistsException;
    public CreateFacetResponse withFacetAlreadyExistsException(openapisdk.models.shared.FacetAlreadyExistsException facetAlreadyExistsException) {
        this.facetAlreadyExistsException = facetAlreadyExistsException;
        return this;
    }
    public openapisdk.models.shared.FacetValidationException facetValidationException;
    public CreateFacetResponse withFacetValidationException(openapisdk.models.shared.FacetValidationException facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public CreateFacetResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public CreateFacetResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidRuleException invalidRuleException;
    public CreateFacetResponse withInvalidRuleException(openapisdk.models.shared.InvalidRuleException invalidRuleException) {
        this.invalidRuleException = invalidRuleException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public CreateFacetResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public CreateFacetResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public CreateFacetResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public CreateFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public CreateFacetResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}