package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddNotificationRequest {
    public AddNotificationHeaders headers;
    public AddNotificationRequest withHeaders(AddNotificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddNotificationAddNotificationRequestBody request;
    public AddNotificationRequest withRequest(AddNotificationAddNotificationRequestBody request) {
        this.request = request;
        return this;
    }
}