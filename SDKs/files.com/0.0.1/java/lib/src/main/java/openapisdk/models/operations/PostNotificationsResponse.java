package openapisdk.models.operations;



public class PostNotificationsResponse {
    public String contentType;
    public PostNotificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationEntity notificationEntity;
    public PostNotificationsResponse withNotificationEntity(openapisdk.models.shared.NotificationEntity notificationEntity) {
        this.notificationEntity = notificationEntity;
        return this;
    }
    public Long statusCode;
    public PostNotificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}