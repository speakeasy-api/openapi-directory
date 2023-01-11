package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountSettingsRequest {
    public UpdateAccountSettingsHeaders headers;
    public UpdateAccountSettingsRequest withHeaders(UpdateAccountSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAccountSettingsInput request;
    public UpdateAccountSettingsRequest withRequest(openapisdk.models.shared.UpdateAccountSettingsInput request) {
        this.request = request;
        return this;
    }
}