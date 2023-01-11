package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoutingControlStatesRequest {
    public UpdateRoutingControlStatesHeaders headers;
    public UpdateRoutingControlStatesRequest withHeaders(UpdateRoutingControlStatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRoutingControlStatesRequest request;
    public UpdateRoutingControlStatesRequest withRequest(openapisdk.models.shared.UpdateRoutingControlStatesRequest request) {
        this.request = request;
        return this;
    }
}