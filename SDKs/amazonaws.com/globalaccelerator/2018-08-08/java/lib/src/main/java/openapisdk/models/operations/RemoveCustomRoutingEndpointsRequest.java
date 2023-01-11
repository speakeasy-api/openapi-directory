package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveCustomRoutingEndpointsRequest {
    public RemoveCustomRoutingEndpointsHeaders headers;
    public RemoveCustomRoutingEndpointsRequest withHeaders(RemoveCustomRoutingEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveCustomRoutingEndpointsRequest request;
    public RemoveCustomRoutingEndpointsRequest withRequest(openapisdk.models.shared.RemoveCustomRoutingEndpointsRequest request) {
        this.request = request;
        return this;
    }
}