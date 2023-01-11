package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNotificationChannelRequest {
    public DeleteNotificationChannelHeaders headers;
    public DeleteNotificationChannelRequest withHeaders(DeleteNotificationChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DeleteNotificationChannelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}