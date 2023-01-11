package openapisdk.models.operations;



public class GetFacetResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public GetFacetResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFacetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FacetNotFoundException facetNotFoundException;
    public GetFacetResponse withFacetNotFoundException(openapisdk.models.shared.FacetNotFoundException facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetFacetResponse getFacetResponse;
    public GetFacetResponse withGetFacetResponse(openapisdk.models.shared.GetFacetResponse getFacetResponse) {
        this.getFacetResponse = getFacetResponse;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public GetFacetResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public GetFacetResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public GetFacetResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public GetFacetResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public GetFacetResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public GetFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public GetFacetResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}