package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVpceConfigurationRequest {
    public CreateVpceConfigurationHeaders headers;
    public CreateVpceConfigurationRequest withHeaders(CreateVpceConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateVpceConfigurationRequest request;
    public CreateVpceConfigurationRequest withRequest(openapisdk.models.shared.CreateVpceConfigurationRequest request) {
        this.request = request;
        return this;
    }
}