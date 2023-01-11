package openapisdk.models.operations;



public class RemoveNotificationChannelResponse {
    public Object accessDeniedException;
    public RemoveNotificationChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public RemoveNotificationChannelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
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
    public java.util.Map<String, Object> removeNotificationChannelResponse;
    public RemoveNotificationChannelResponse withRemoveNotificationChannelResponse(java.util.Map<String, Object> removeNotificationChannelResponse) {
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