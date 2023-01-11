package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoutingControlStateRequest {
    public UpdateRoutingControlStateHeaders headers;
    public UpdateRoutingControlStateRequest withHeaders(UpdateRoutingControlStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRoutingControlStateRequest request;
    public UpdateRoutingControlStateRequest withRequest(openapisdk.models.shared.UpdateRoutingControlStateRequest request) {
        this.request = request;
        return this;
    }
}