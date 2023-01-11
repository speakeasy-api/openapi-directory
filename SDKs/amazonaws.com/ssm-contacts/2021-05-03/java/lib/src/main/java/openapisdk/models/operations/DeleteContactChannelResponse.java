package openapisdk.models.operations;



public class DeleteContactChannelResponse {
    public Object accessDeniedException;
    public DeleteContactChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteContactChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteContactChannelResult;
    public DeleteContactChannelResponse withDeleteContactChannelResult(java.util.Map<String, Object> deleteContactChannelResult) {
        this.deleteContactChannelResult = deleteContactChannelResult;
        return this;
    }
    public Object internalServerException;
    public DeleteContactChannelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteContactChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteContactChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteContactChannelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteContactChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}