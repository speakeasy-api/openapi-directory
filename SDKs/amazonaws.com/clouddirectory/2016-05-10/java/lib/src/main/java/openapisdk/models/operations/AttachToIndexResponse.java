package openapisdk.models.operations;



public class AttachToIndexResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public AttachToIndexResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
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
    public openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException;
    public AttachToIndexResponse withDirectoryNotEnabledException(openapisdk.models.shared.DirectoryNotEnabledException directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.IndexedAttributeMissingException indexedAttributeMissingException;
    public AttachToIndexResponse withIndexedAttributeMissingException(openapisdk.models.shared.IndexedAttributeMissingException indexedAttributeMissingException) {
        this.indexedAttributeMissingException = indexedAttributeMissingException;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public AttachToIndexResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public AttachToIndexResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidAttachmentException invalidAttachmentException;
    public AttachToIndexResponse withInvalidAttachmentException(openapisdk.models.shared.InvalidAttachmentException invalidAttachmentException) {
        this.invalidAttachmentException = invalidAttachmentException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public AttachToIndexResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.LinkNameAlreadyInUseException linkNameAlreadyInUseException;
    public AttachToIndexResponse withLinkNameAlreadyInUseException(openapisdk.models.shared.LinkNameAlreadyInUseException linkNameAlreadyInUseException) {
        this.linkNameAlreadyInUseException = linkNameAlreadyInUseException;
        return this;
    }
    public openapisdk.models.shared.NotIndexException notIndexException;
    public AttachToIndexResponse withNotIndexException(openapisdk.models.shared.NotIndexException notIndexException) {
        this.notIndexException = notIndexException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public AttachToIndexResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public AttachToIndexResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public AttachToIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public AttachToIndexResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}