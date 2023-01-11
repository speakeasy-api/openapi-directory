package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TryNotificationConfigRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Notification request;
    public TryNotificationConfigRequest withRequest(openapisdk.models.shared.Notification request) {
        this.request = request;
        return this;
    }
}