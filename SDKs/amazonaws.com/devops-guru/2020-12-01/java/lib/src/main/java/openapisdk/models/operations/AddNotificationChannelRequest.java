package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddNotificationChannelRequest {
    public AddNotificationChannelHeaders headers;
    public AddNotificationChannelRequest withHeaders(AddNotificationChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddNotificationChannelRequestBody request;
    public AddNotificationChannelRequest withRequest(AddNotificationChannelRequestBody request) {
        this.request = request;
        return this;
    }
}