package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEndpointGroupRequest {
    public UpdateEndpointGroupHeaders headers;
    public UpdateEndpointGroupRequest withHeaders(UpdateEndpointGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEndpointGroupRequest request;
    public UpdateEndpointGroupRequest withRequest(openapisdk.models.shared.UpdateEndpointGroupRequest request) {
        this.request = request;
        return this;
    }
}