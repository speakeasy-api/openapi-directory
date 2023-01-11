package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNotificationRequest {
    public CreateNotificationHeaders headers;
    public CreateNotificationRequest withHeaders(CreateNotificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateNotificationRequest request;
    public CreateNotificationRequest withRequest(openapisdk.models.shared.CreateNotificationRequest request) {
        this.request = request;
        return this;
    }
}