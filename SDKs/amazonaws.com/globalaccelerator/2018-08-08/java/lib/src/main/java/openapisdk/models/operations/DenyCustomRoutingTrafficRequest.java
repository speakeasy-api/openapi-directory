package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DenyCustomRoutingTrafficRequest {
    public DenyCustomRoutingTrafficHeaders headers;
    public DenyCustomRoutingTrafficRequest withHeaders(DenyCustomRoutingTrafficHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DenyCustomRoutingTrafficRequest request;
    public DenyCustomRoutingTrafficRequest withRequest(openapisdk.models.shared.DenyCustomRoutingTrafficRequest request) {
        this.request = request;
        return this;
    }
}