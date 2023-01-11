package openapisdk.models.operations;



public class UpdateContactChannelResponse {
    public Object accessDeniedException;
    public UpdateContactChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateContactChannelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateContactChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dataEncryptionException;
    public UpdateContactChannelResponse withDataEncryptionException(Object dataEncryptionException) {
        this.dataEncryptionException = dataEncryptionException;
        return this;
    }
    public Object internalServerException;
    public UpdateContactChannelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateContactChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateContactChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateContactChannelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateContactChannelResult;
    public UpdateContactChannelResponse withUpdateContactChannelResult(java.util.Map<String, Object> updateContactChannelResult) {
        this.updateContactChannelResult = updateContactChannelResult;
        return this;
    }
    public Object validationException;
    public UpdateContactChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}