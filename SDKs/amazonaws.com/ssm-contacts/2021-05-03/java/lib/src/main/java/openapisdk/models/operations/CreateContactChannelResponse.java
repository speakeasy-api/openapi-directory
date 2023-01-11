package openapisdk.models.operations;



public class CreateContactChannelResponse {
    public Object accessDeniedException;
    public CreateContactChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateContactChannelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateContactChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateContactChannelResult createContactChannelResult;
    public CreateContactChannelResponse withCreateContactChannelResult(openapisdk.models.shared.CreateContactChannelResult createContactChannelResult) {
        this.createContactChannelResult = createContactChannelResult;
        return this;
    }
    public Object dataEncryptionException;
    public CreateContactChannelResponse withDataEncryptionException(Object dataEncryptionException) {
        this.dataEncryptionException = dataEncryptionException;
        return this;
    }
    public Object internalServerException;
    public CreateContactChannelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateContactChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateContactChannelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateContactChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}