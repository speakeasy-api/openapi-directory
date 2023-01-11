package openapisdk.models.operations;



public class CreateFacetResponse {
    public Object accessDeniedException;
    public CreateFacetResponse withAccessDeniedException(Object accessDeniedException) {
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
    public Object facetAlreadyExistsException;
    public CreateFacetResponse withFacetAlreadyExistsException(Object facetAlreadyExistsException) {
        this.facetAlreadyExistsException = facetAlreadyExistsException;
        return this;
    }
    public Object facetValidationException;
    public CreateFacetResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public CreateFacetResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public CreateFacetResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidRuleException;
    public CreateFacetResponse withInvalidRuleException(Object invalidRuleException) {
        this.invalidRuleException = invalidRuleException;
        return this;
    }
    public Object limitExceededException;
    public CreateFacetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateFacetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public CreateFacetResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public CreateFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateFacetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}