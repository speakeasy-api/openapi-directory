package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotifyApplicationStateRequest {
    public NotifyApplicationStateHeaders headers;
    public NotifyApplicationStateRequest withHeaders(NotifyApplicationStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NotifyApplicationStateRequest request;
    public NotifyApplicationStateRequest withRequest(openapisdk.models.shared.NotifyApplicationStateRequest request) {
        this.request = request;
        return this;
    }
}