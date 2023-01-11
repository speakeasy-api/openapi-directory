package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFleetPortSettingsRequest {
    public UpdateFleetPortSettingsHeaders headers;
    public UpdateFleetPortSettingsRequest withHeaders(UpdateFleetPortSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFleetPortSettingsInput request;
    public UpdateFleetPortSettingsRequest withRequest(openapisdk.models.shared.UpdateFleetPortSettingsInput request) {
        this.request = request;
        return this;
    }
}