package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVpceConfigurationRequest {
    public DeleteVpceConfigurationHeaders headers;
    public DeleteVpceConfigurationRequest withHeaders(DeleteVpceConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteVpceConfigurationRequest request;
    public DeleteVpceConfigurationRequest withRequest(openapisdk.models.shared.DeleteVpceConfigurationRequest request) {
        this.request = request;
        return this;
    }
}