package openapisdk.models.operations;



public class ListContactChannelsResponse {
    public Object accessDeniedException;
    public ListContactChannelsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListContactChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dataEncryptionException;
    public ListContactChannelsResponse withDataEncryptionException(Object dataEncryptionException) {
        this.dataEncryptionException = dataEncryptionException;
        return this;
    }
    public Object internalServerException;
    public ListContactChannelsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListContactChannelsResult listContactChannelsResult;
    public ListContactChannelsResponse withListContactChannelsResult(openapisdk.models.shared.ListContactChannelsResult listContactChannelsResult) {
        this.listContactChannelsResult = listContactChannelsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ListContactChannelsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListContactChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListContactChannelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListContactChannelsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}