package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNotificationRequest {
    public DeleteNotificationHeaders headers;
    public DeleteNotificationRequest withHeaders(DeleteNotificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteNotificationRequest request;
    public DeleteNotificationRequest withRequest(openapisdk.models.shared.DeleteNotificationRequest request) {
        this.request = request;
        return this;
    }
}