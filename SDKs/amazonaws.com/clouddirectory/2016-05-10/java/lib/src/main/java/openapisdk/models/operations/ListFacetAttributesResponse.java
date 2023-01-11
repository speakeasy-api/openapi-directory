package openapisdk.models.operations;



public class ListFacetAttributesResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public ListFacetAttributesResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFacetAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FacetNotFoundException facetNotFoundException;
    public ListFacetAttributesResponse withFacetNotFoundException(openapisdk.models.shared.FacetNotFoundException facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public ListFacetAttributesResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public ListFacetAttributesResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException;
    public ListFacetAttributesResponse withInvalidNextTokenException(openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public ListFacetAttributesResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListFacetAttributesResponse listFacetAttributesResponse;
    public ListFacetAttributesResponse withListFacetAttributesResponse(openapisdk.models.shared.ListFacetAttributesResponse listFacetAttributesResponse) {
        this.listFacetAttributesResponse = listFacetAttributesResponse;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public ListFacetAttributesResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public ListFacetAttributesResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListFacetAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public ListFacetAttributesResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}