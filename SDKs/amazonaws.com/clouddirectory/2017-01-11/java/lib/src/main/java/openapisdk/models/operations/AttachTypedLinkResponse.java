package openapisdk.models.operations;



public class AttachTypedLinkResponse {
    public Object accessDeniedException;
    public AttachTypedLinkResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AttachTypedLinkResponse attachTypedLinkResponse;
    public AttachTypedLinkResponse withAttachTypedLinkResponse(openapisdk.models.shared.AttachTypedLinkResponse attachTypedLinkResponse) {
        this.attachTypedLinkResponse = attachTypedLinkResponse;
        return this;
    }
    public String contentType;
    public AttachTypedLinkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public AttachTypedLinkResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public AttachTypedLinkResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public AttachTypedLinkResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public AttachTypedLinkResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidAttachmentException;
    public AttachTypedLinkResponse withInvalidAttachmentException(Object invalidAttachmentException) {
        this.invalidAttachmentException = invalidAttachmentException;
        return this;
    }
    public Object limitExceededException;
    public AttachTypedLinkResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AttachTypedLinkResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public AttachTypedLinkResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public AttachTypedLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AttachTypedLinkResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}