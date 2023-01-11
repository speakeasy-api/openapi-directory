package openapisdk.models.operations;



public class GetLinkAttributesResponse {
    public Object accessDeniedException;
    public GetLinkAttributesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetLinkAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public GetLinkAttributesResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public GetLinkAttributesResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public openapisdk.models.shared.GetLinkAttributesResponse getLinkAttributesResponse;
    public GetLinkAttributesResponse withGetLinkAttributesResponse(openapisdk.models.shared.GetLinkAttributesResponse getLinkAttributesResponse) {
        this.getLinkAttributesResponse = getLinkAttributesResponse;
        return this;
    }
    public Object internalServiceException;
    public GetLinkAttributesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public GetLinkAttributesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public GetLinkAttributesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLinkAttributesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public GetLinkAttributesResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public GetLinkAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetLinkAttributesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}