package openapisdk.models.operations;



public class PublishPushNotificationToDevicesResponse {
    public byte[] body;
    public PublishPushNotificationToDevicesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PublishPushNotificationToDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PublishPushNotificationToDevicesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PublishPushNotificationToDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}