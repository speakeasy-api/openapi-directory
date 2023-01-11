package openapisdk.models.operations;



public class ListNotificationsResponse {
    public String contentType;
    public ListNotificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationCollectionResponse notificationCollectionResponse;
    public ListNotificationsResponse withNotificationCollectionResponse(openapisdk.models.shared.NotificationCollectionResponse notificationCollectionResponse) {
        this.notificationCollectionResponse = notificationCollectionResponse;
        return this;
    }
    public Long statusCode;
    public ListNotificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}