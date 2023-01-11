package openapisdk.models.operations;



public class GetNotificationByIdResponse {
    public String contentType;
    public GetNotificationByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotificationResponse notificationResponse;
    public GetNotificationByIdResponse withNotificationResponse(openapisdk.models.shared.NotificationResponse notificationResponse) {
        this.notificationResponse = notificationResponse;
        return this;
    }
    public Long statusCode;
    public GetNotificationByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}