package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutNotificationChannelRequest {
    public PutNotificationChannelHeaders headers;
    public PutNotificationChannelRequest withHeaders(PutNotificationChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutNotificationChannelRequest request;
    public PutNotificationChannelRequest withRequest(openapisdk.models.shared.PutNotificationChannelRequest request) {
        this.request = request;
        return this;
    }
}