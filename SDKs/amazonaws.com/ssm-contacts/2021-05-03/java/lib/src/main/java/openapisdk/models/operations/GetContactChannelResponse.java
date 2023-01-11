package openapisdk.models.operations;



public class GetContactChannelResponse {
    public Object accessDeniedException;
    public GetContactChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetContactChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dataEncryptionException;
    public GetContactChannelResponse withDataEncryptionException(Object dataEncryptionException) {
        this.dataEncryptionException = dataEncryptionException;
        return this;
    }
    public openapisdk.models.shared.GetContactChannelResult getContactChannelResult;
    public GetContactChannelResponse withGetContactChannelResult(openapisdk.models.shared.GetContactChannelResult getContactChannelResult) {
        this.getContactChannelResult = getContactChannelResult;
        return this;
    }
    public Object internalServerException;
    public GetContactChannelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetContactChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetContactChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetContactChannelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetContactChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}