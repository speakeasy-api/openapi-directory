package openapisdk.models.operations;



public class DeactivateContactChannelResponse {
    public Object accessDeniedException;
    public DeactivateContactChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeactivateContactChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deactivateContactChannelResult;
    public DeactivateContactChannelResponse withDeactivateContactChannelResult(java.util.Map<String, Object> deactivateContactChannelResult) {
        this.deactivateContactChannelResult = deactivateContactChannelResult;
        return this;
    }
    public Object internalServerException;
    public DeactivateContactChannelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeactivateContactChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeactivateContactChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeactivateContactChannelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeactivateContactChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}