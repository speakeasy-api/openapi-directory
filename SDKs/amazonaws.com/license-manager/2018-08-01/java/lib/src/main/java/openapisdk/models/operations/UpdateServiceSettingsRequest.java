package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceSettingsRequest {
    public UpdateServiceSettingsHeaders headers;
    public UpdateServiceSettingsRequest withHeaders(UpdateServiceSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateServiceSettingsRequest request;
    public UpdateServiceSettingsRequest withRequest(openapisdk.models.shared.UpdateServiceSettingsRequest request) {
        this.request = request;
        return this;
    }
}