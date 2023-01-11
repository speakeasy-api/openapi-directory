package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllowCustomRoutingTrafficRequest {
    public AllowCustomRoutingTrafficHeaders headers;
    public AllowCustomRoutingTrafficRequest withHeaders(AllowCustomRoutingTrafficHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AllowCustomRoutingTrafficRequest request;
    public AllowCustomRoutingTrafficRequest withRequest(openapisdk.models.shared.AllowCustomRoutingTrafficRequest request) {
        this.request = request;
        return this;
    }
}