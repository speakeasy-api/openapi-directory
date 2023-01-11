package openapisdk.models.operations;



public class GetNotificationsIdResponse {
    public String contentType;
    public GetNotificationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationEntity notificationEntity;
    public GetNotificationsIdResponse withNotificationEntity(openapisdk.models.shared.NotificationEntity notificationEntity) {
        this.notificationEntity = notificationEntity;
        return this;
    }
    public Long statusCode;
    public GetNotificationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}