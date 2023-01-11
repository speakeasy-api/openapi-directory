package openapisdk.models.operations;



public class AddNotificationResponse {
    public String contentType;
    public AddNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationResponse notificationResponse;
    public AddNotificationResponse withNotificationResponse(openapisdk.models.shared.NotificationResponse notificationResponse) {
        this.notificationResponse = notificationResponse;
        return this;
    }
    public Long statusCode;
    public AddNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}