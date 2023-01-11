package openapisdk.models.operations;



public class ListTypedLinkFacetNamesResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public ListTypedLinkFacetNamesResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListTypedLinkFacetNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public ListTypedLinkFacetNamesResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public ListTypedLinkFacetNamesResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException;
    public ListTypedLinkFacetNamesResponse withInvalidNextTokenException(openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public ListTypedLinkFacetNamesResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListTypedLinkFacetNamesResponse listTypedLinkFacetNamesResponse;
    public ListTypedLinkFacetNamesResponse withListTypedLinkFacetNamesResponse(openapisdk.models.shared.ListTypedLinkFacetNamesResponse listTypedLinkFacetNamesResponse) {
        this.listTypedLinkFacetNamesResponse = listTypedLinkFacetNamesResponse;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public ListTypedLinkFacetNamesResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public ListTypedLinkFacetNamesResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListTypedLinkFacetNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public ListTypedLinkFacetNamesResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}