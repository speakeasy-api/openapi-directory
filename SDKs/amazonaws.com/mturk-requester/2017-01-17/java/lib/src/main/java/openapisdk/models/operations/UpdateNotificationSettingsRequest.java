package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNotificationSettingsRequest {
    public UpdateNotificationSettingsHeaders headers;
    public UpdateNotificationSettingsRequest withHeaders(UpdateNotificationSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateNotificationSettingsRequest request;
    public UpdateNotificationSettingsRequest withRequest(openapisdk.models.shared.UpdateNotificationSettingsRequest request) {
        this.request = request;
        return this;
    }
}