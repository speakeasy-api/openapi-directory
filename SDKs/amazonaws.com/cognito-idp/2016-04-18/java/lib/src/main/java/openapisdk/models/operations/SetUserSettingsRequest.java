package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetUserSettingsRequest {
    public SetUserSettingsHeaders headers;
    public SetUserSettingsRequest withHeaders(SetUserSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetUserSettingsRequest request;
    public SetUserSettingsRequest withRequest(openapisdk.models.shared.SetUserSettingsRequest request) {
        this.request = request;
        return this;
    }
}