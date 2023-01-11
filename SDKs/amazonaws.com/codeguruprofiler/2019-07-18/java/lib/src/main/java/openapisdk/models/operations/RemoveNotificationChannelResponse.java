package openapisdk.models.operations;



public class RemoveNotificationChannelResponse {
    public String contentType;
    public RemoveNotificationChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public RemoveNotificationChannelResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.RemoveNotificationChannelResponse removeNotificationChannelResponse;
    public RemoveNotificationChannelResponse withRemoveNotificationChannelResponse(openapisdk.models.shared.RemoveNotificationChannelResponse removeNotificationChannelResponse) {
        this.removeNotificationChannelResponse = removeNotificationChannelResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RemoveNotificationChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RemoveNotificationChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RemoveNotificationChannelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public RemoveNotificationChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}