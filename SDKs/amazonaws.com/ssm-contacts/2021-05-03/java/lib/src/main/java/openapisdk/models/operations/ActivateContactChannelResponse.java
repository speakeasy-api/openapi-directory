package openapisdk.models.operations;



public class ActivateContactChannelResponse {
    public Object accessDeniedException;
    public ActivateContactChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> activateContactChannelResult;
    public ActivateContactChannelResponse withActivateContactChannelResult(java.util.Map<String, Object> activateContactChannelResult) {
        this.activateContactChannelResult = activateContactChannelResult;
        return this;
    }
    public String contentType;
    public ActivateContactChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ActivateContactChannelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public ActivateContactChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ActivateContactChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ActivateContactChannelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ActivateContactChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}