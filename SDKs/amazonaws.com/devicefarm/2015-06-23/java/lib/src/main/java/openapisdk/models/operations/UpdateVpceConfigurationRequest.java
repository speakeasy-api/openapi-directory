package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVpceConfigurationRequest {
    public UpdateVpceConfigurationHeaders headers;
    public UpdateVpceConfigurationRequest withHeaders(UpdateVpceConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateVpceConfigurationRequest request;
    public UpdateVpceConfigurationRequest withRequest(openapisdk.models.shared.UpdateVpceConfigurationRequest request) {
        this.request = request;
        return this;
    }
}