package openapisdk.models.operations;



public class PublishPushNotificationToDevicesRequest {
    public PublishPushNotificationToDevicesQueryParams queryParams;
    public PublishPushNotificationToDevicesRequest withQueryParams(PublishPushNotificationToDevicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PublishPushNotificationToDevicesHeaders headers;
    public PublishPushNotificationToDevicesRequest withHeaders(PublishPushNotificationToDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PublishPushNotificationToDevicesRequests request;
    public PublishPushNotificationToDevicesRequest withRequest(PublishPushNotificationToDevicesRequests request) {
        this.request = request;
        return this;
    }
}