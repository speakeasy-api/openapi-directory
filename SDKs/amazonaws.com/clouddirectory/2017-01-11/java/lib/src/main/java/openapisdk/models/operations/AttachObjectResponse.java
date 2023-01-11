package openapisdk.models.operations;



public class AttachObjectResponse {
    public Object accessDeniedException;
    public AttachObjectResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AttachObjectResponse attachObjectResponse;
    public AttachObjectResponse withAttachObjectResponse(openapisdk.models.shared.AttachObjectResponse attachObjectResponse) {
        this.attachObjectResponse = attachObjectResponse;
        return this;
    }
    public String contentType;
    public AttachObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public AttachObjectResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object facetValidationException;
    public AttachObjectResponse withFacetValidationException(Object facetValidationException) {
        this.facetValidationException = facetValidationException;
        return this;
    }
    public Object internalServiceException;
    public AttachObjectResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public AttachObjectResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidAttachmentException;
    public AttachObjectResponse withInvalidAttachmentException(Object invalidAttachmentException) {
        this.invalidAttachmentException = invalidAttachmentException;
        return this;
    }
    public Object limitExceededException;
    public AttachObjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object linkNameAlreadyInUseException;
    public AttachObjectResponse withLinkNameAlreadyInUseException(Object linkNameAlreadyInUseException) {
        this.linkNameAlreadyInUseException = linkNameAlreadyInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public AttachObjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public AttachObjectResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public AttachObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AttachObjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}