package openapisdk.models.operations;



public class TryNotificationConfigResponse {
    public String contentType;
    public TryNotificationConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo;
    public TryNotificationConfigResponse withInvalidInputExceptionInfo(openapisdk.models.shared.InvalidInputExceptionInfo invalidInputExceptionInfo) {
        this.invalidInputExceptionInfo = invalidInputExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo;
    public TryNotificationConfigResponse withNotFoundKnownExceptionInfo(openapisdk.models.shared.NotFoundKnownExceptionInfo notFoundKnownExceptionInfo) {
        this.notFoundKnownExceptionInfo = notFoundKnownExceptionInfo;
        return this;
    }
    public openapisdk.models.shared.NotificationRead notificationRead;
    public TryNotificationConfigResponse withNotificationRead(openapisdk.models.shared.NotificationRead notificationRead) {
        this.notificationRead = notificationRead;
        return this;
    }
    public Long statusCode;
    public TryNotificationConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}