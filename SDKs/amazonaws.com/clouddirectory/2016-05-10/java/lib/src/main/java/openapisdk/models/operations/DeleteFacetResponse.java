package openapisdk.models.operations;



public class DeleteFacetResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public DeleteFacetResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteFacetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteFacetResponse;
    public DeleteFacetResponse withDeleteFacetResponse(java.util.Map<String, Object> deleteFacetResponse) {
        this.deleteFacetResponse = deleteFacetResponse;
        return this;
    }
    public openapisdk.models.shared.FacetInUseException facetInUseException;
    public DeleteFacetResponse withFacetInUseException(openapisdk.models.shared.FacetInUseException facetInUseException) {
        this.facetInUseException = facetInUseException;
        return this;
    }
    public openapisdk.models.shared.FacetNotFoundException facetNotFoundException;
    public DeleteFacetResponse withFacetNotFoundException(openapisdk.models.shared.FacetNotFoundException facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public DeleteFacetResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public DeleteFacetResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public DeleteFacetResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public DeleteFacetResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public DeleteFacetResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public DeleteFacetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public DeleteFacetResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}