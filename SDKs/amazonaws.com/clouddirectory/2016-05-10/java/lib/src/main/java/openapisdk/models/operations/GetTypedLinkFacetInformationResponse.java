package openapisdk.models.operations;



public class GetTypedLinkFacetInformationResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public GetTypedLinkFacetInformationResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetTypedLinkFacetInformationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FacetNotFoundException facetNotFoundException;
    public GetTypedLinkFacetInformationResponse withFacetNotFoundException(openapisdk.models.shared.FacetNotFoundException facetNotFoundException) {
        this.facetNotFoundException = facetNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetTypedLinkFacetInformationResponse getTypedLinkFacetInformationResponse;
    public GetTypedLinkFacetInformationResponse withGetTypedLinkFacetInformationResponse(openapisdk.models.shared.GetTypedLinkFacetInformationResponse getTypedLinkFacetInformationResponse) {
        this.getTypedLinkFacetInformationResponse = getTypedLinkFacetInformationResponse;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public GetTypedLinkFacetInformationResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public GetTypedLinkFacetInformationResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException;
    public GetTypedLinkFacetInformationResponse withInvalidNextTokenException(openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public GetTypedLinkFacetInformationResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public GetTypedLinkFacetInformationResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public GetTypedLinkFacetInformationResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public GetTypedLinkFacetInformationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public GetTypedLinkFacetInformationResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}