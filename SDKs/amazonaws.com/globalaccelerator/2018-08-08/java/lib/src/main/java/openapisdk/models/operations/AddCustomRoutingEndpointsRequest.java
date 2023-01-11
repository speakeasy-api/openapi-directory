package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCustomRoutingEndpointsRequest {
    public AddCustomRoutingEndpointsHeaders headers;
    public AddCustomRoutingEndpointsRequest withHeaders(AddCustomRoutingEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddCustomRoutingEndpointsRequest request;
    public AddCustomRoutingEndpointsRequest withRequest(openapisdk.models.shared.AddCustomRoutingEndpointsRequest request) {
        this.request = request;
        return this;
    }
}