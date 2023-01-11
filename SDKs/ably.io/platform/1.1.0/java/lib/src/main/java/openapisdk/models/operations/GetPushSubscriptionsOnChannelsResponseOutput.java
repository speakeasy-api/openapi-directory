package openapisdk.models.operations;



public class GetPushSubscriptionsOnChannelsResponseOutput {
    public byte[] body;
    public GetPushSubscriptionsOnChannelsResponseOutput withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPushSubscriptionsOnChannelsResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceDetailsOutput deviceDetails;
    public GetPushSubscriptionsOnChannelsResponseOutput withDeviceDetails(openapisdk.models.shared.DeviceDetailsOutput deviceDetails) {
        this.deviceDetails = deviceDetails;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPushSubscriptionsOnChannelsResponseOutput withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetPushSubscriptionsOnChannelsResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}