package openapisdk.models.operations;



public class CreateTypedLinkFacetResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public CreateTypedLinkFacetResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateTypedLinkFacetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createTypedLinkFacetResponse;
    public CreateTypedLinkFacetResponse withCreateTypedLinkFacetResponse(java.util.Map<String, Object> createTypedLinkFacetResponse) {
        this.createTypedLinkFacetResponse = createTypedLinkFacetResponse;
        return this;
    }
    public openapisdk.models.shared.FacetAlreadyExistsException facetAlreadyExistsException;
    public CreateTypedLinkFacetResponse withFacetAlreadyExistsException(openapisdk.models.shared.FacetAlreadyExistsException facetAlreadyExistsException) {
        this.facetAlreadyExistsException = facetAlreadyExistsException;
        return this;
    }
    public openapisdk.models.shared.FacetValidationException facetValidationException;
    public CreateTypedLinkFacetResponse withFacetValidationException(openapisdk.models.shared.FacetValidationException facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public CreateTypedLinkFacetResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public CreateTypedLinkFacetResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidRuleException invalidRuleException;
    public CreateTypedLinkFacetResponse withInvalidRuleException(openapisdk.models.shared.InvalidRuleException invalidRuleException) {
        this.invalidRuleException = invalidRuleException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public CreateTypedLinkFacetResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public CreateTypedLinkFacetResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public CreateTypedLinkFacetResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public CreateTypedLinkFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public CreateTypedLinkFacetResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}