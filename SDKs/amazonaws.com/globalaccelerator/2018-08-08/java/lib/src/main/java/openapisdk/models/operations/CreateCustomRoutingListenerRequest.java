package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomRoutingListenerRequest {
    public CreateCustomRoutingListenerHeaders headers;
    public CreateCustomRoutingListenerRequest withHeaders(CreateCustomRoutingListenerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCustomRoutingListenerRequest request;
    public CreateCustomRoutingListenerRequest withRequest(openapisdk.models.shared.CreateCustomRoutingListenerRequest request) {
        this.request = request;
        return this;
    }
}