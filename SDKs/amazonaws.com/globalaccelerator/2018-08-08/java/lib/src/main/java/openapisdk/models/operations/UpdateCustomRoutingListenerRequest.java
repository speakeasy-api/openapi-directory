package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomRoutingListenerRequest {
    public UpdateCustomRoutingListenerHeaders headers;
    public UpdateCustomRoutingListenerRequest withHeaders(UpdateCustomRoutingListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCustomRoutingListenerRequest request;
    public UpdateCustomRoutingListenerRequest withRequest(openapisdk.models.shared.UpdateCustomRoutingListenerRequest request) {
        this.request = request;
        return this;
    }
}