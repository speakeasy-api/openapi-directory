package openapisdk.models.operations;



public class GetNotificationsResponse {
    public String contentType;
    public GetNotificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationEntity[] notificationEntities;
    public GetNotificationsResponse withNotificationEntities(openapisdk.models.shared.NotificationEntity[] notificationEntities) {
        this.notificationEntities = notificationEntities;
        return this;
    }
    public Long statusCode;
    public GetNotificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}