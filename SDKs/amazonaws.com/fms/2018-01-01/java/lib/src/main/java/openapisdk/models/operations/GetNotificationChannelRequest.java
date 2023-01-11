package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNotificationChannelRequest {
    public GetNotificationChannelHeaders headers;
    public GetNotificationChannelRequest withHeaders(GetNotificationChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetNotificationChannelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}