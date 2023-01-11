package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEndpointRequest {
    public UpdateEndpointHeaders headers;
    public UpdateEndpointRequest withHeaders(UpdateEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEndpointRequest request;
    public UpdateEndpointRequest withRequest(openapisdk.models.shared.UpdateEndpointRequest request) {
        this.request = request;
        return this;
    }
}