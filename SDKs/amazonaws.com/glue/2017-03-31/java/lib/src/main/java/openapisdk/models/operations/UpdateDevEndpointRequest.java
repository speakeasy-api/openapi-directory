package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDevEndpointRequest {
    public UpdateDevEndpointHeaders headers;
    public UpdateDevEndpointRequest withHeaders(UpdateDevEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDevEndpointRequest request;
    public UpdateDevEndpointRequest withRequest(openapisdk.models.shared.UpdateDevEndpointRequest request) {
        this.request = request;
        return this;
    }
}