package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmergencyContactSettingsRequest {
    public UpdateEmergencyContactSettingsHeaders headers;
    public UpdateEmergencyContactSettingsRequest withHeaders(UpdateEmergencyContactSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEmergencyContactSettingsRequest request;
    public UpdateEmergencyContactSettingsRequest withRequest(openapisdk.models.shared.UpdateEmergencyContactSettingsRequest request) {
        this.request = request;
        return this;
    }
}