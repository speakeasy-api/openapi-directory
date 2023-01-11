package openapisdk.models.operations;



public class UpdateNotificationByIdResponse {
    public String contentType;
    public UpdateNotificationByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationResponse notificationResponse;
    public UpdateNotificationByIdResponse withNotificationResponse(openapisdk.models.shared.NotificationResponse notificationResponse) {
        this.notificationResponse = notificationResponse;
        return this;
    }
    public Long statusCode;
    public UpdateNotificationByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}