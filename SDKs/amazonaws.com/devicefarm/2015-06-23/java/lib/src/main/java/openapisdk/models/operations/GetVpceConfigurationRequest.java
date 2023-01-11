package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVpceConfigurationRequest {
    public GetVpceConfigurationHeaders headers;
    public GetVpceConfigurationRequest withHeaders(GetVpceConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetVpceConfigurationRequest request;
    public GetVpceConfigurationRequest withRequest(openapisdk.models.shared.GetVpceConfigurationRequest request) {
        this.request = request;
        return this;
    }
}