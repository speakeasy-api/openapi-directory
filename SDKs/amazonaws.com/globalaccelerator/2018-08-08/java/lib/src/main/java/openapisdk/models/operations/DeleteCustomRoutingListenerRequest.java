package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomRoutingListenerRequest {
    public DeleteCustomRoutingListenerHeaders headers;
    public DeleteCustomRoutingListenerRequest withHeaders(DeleteCustomRoutingListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCustomRoutingListenerRequest request;
    public DeleteCustomRoutingListenerRequest withRequest(openapisdk.models.shared.DeleteCustomRoutingListenerRequest request) {
        this.request = request;
        return this;
    }
}