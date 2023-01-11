package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNotificationRequest {
    public UpdateNotificationHeaders headers;
    public UpdateNotificationRequest withHeaders(UpdateNotificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateNotificationRequest request;
    public UpdateNotificationRequest withRequest(openapisdk.models.shared.UpdateNotificationRequest request) {
        this.request = request;
        return this;
    }
}