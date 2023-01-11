package openapisdk.models.operations;



public class ListNotificationChannelsResponse {
    public Object accessDeniedException;
    public ListNotificationChannelsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListNotificationChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListNotificationChannelsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListNotificationChannelsResponse listNotificationChannelsResponse;
    public ListNotificationChannelsResponse withListNotificationChannelsResponse(openapisdk.models.shared.ListNotificationChannelsResponse listNotificationChannelsResponse) {
        this.listNotificationChannelsResponse = listNotificationChannelsResponse;
        return this;
    }
    public Long statusCode;
    public ListNotificationChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListNotificationChannelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListNotificationChannelsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}