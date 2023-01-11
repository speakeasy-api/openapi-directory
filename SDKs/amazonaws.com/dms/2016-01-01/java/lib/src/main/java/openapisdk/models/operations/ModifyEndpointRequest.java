package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyEndpointRequest {
    public ModifyEndpointHeaders headers;
    public ModifyEndpointRequest withHeaders(ModifyEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyEndpointMessage request;
    public ModifyEndpointRequest withRequest(openapisdk.models.shared.ModifyEndpointMessage request) {
        this.request = request;
        return this;
    }
}