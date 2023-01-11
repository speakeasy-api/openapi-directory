package openapisdk.models.operations;



public class CreateTypedLinkFacetResponse {
    public Object accessDeniedException;
    public CreateTypedLinkFacetResponse withAccessDeniedException(Object accessDeniedException) {
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
    public Object facetAlreadyExistsException;
    public CreateTypedLinkFacetResponse withFacetAlreadyExistsException(Object facetAlreadyExistsException) {
        this.facetAlreadyExistsException = facetAlreadyExistsException;
        return this;
    }
    public Object facetValidationException;
    public CreateTypedLinkFacetResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public CreateTypedLinkFacetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public CreateTypedLinkFacetResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidRuleException;
    public CreateTypedLinkFacetResponse withInvalidRuleException(Object invalidRuleException) {
        this.invalidRuleException = invalidRuleException;
        return this;
    }
    public Object limitExceededException;
    public CreateTypedLinkFacetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateTypedLinkFacetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public CreateTypedLinkFacetResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public CreateTypedLinkFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateTypedLinkFacetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}