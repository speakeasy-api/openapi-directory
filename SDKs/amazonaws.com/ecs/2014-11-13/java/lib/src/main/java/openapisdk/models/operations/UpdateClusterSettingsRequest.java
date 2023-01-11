package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClusterSettingsRequest {
    public UpdateClusterSettingsHeaders headers;
    public UpdateClusterSettingsRequest withHeaders(UpdateClusterSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateClusterSettingsRequest request;
    public UpdateClusterSettingsRequest withRequest(openapisdk.models.shared.UpdateClusterSettingsRequest request) {
        this.request = request;
        return this;
    }
}