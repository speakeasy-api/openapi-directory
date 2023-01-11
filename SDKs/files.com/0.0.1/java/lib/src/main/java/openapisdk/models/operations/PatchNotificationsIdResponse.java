package openapisdk.models.operations;



public class PatchNotificationsIdResponse {
    public String contentType;
    public PatchNotificationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationEntity notificationEntity;
    public PatchNotificationsIdResponse withNotificationEntity(openapisdk.models.shared.NotificationEntity notificationEntity) {
        this.notificationEntity = notificationEntity;
        return this;
    }
    public Long statusCode;
    public PatchNotificationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}