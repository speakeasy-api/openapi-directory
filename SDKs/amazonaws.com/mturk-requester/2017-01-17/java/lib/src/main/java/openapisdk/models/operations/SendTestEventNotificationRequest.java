package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendTestEventNotificationRequest {
    public SendTestEventNotificationHeaders headers;
    public SendTestEventNotificationRequest withHeaders(SendTestEventNotificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendTestEventNotificationRequest request;
    public SendTestEventNotificationRequest withRequest(openapisdk.models.shared.SendTestEventNotificationRequest request) {
        this.request = request;
        return this;
    }
}