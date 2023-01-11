package openapisdk.models.operations;



public class AttachToIndexResponse {
    public Object accessDeniedException;
    public AttachToIndexResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AttachToIndexResponse attachToIndexResponse;
    public AttachToIndexResponse withAttachToIndexResponse(openapisdk.models.shared.AttachToIndexResponse attachToIndexResponse) {
        this.attachToIndexResponse = attachToIndexResponse;
        return this;
    }
    public String contentType;
    public AttachToIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public AttachToIndexResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object indexedAttributeMissingException;
    public AttachToIndexResponse withIndexedAttributeMissingException(Object indexedAttributeMissingException) {
        this.indexedAttributeMissingException = indexedAttributeMissingException;
        return this;
    }
    public Object internalServiceException;
    public AttachToIndexResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public AttachToIndexResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidAttachmentException;
    public AttachToIndexResponse withInvalidAttachmentException(Object invalidAttachmentException) {
        this.invalidAttachmentException = invalidAttachmentException;
        return this;
    }
    public Object limitExceededException;
    public AttachToIndexResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object linkNameAlreadyInUseException;
    public AttachToIndexResponse withLinkNameAlreadyInUseException(Object linkNameAlreadyInUseException) {
        this.linkNameAlreadyInUseException = linkNameAlreadyInUseException;
        return this;
    }
    public Object notIndexException;
    public AttachToIndexResponse withNotIndexException(Object notIndexException) {
        this.notIndexException = notIndexException;
        return this;
    }
    public Object resourceNotFoundException;
    public AttachToIndexResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public AttachToIndexResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public AttachToIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AttachToIndexResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}