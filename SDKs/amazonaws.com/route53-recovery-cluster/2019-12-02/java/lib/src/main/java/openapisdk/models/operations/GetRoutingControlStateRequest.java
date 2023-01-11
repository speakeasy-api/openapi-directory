package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRoutingControlStateRequest {
    public GetRoutingControlStateHeaders headers;
    public GetRoutingControlStateRequest withHeaders(GetRoutingControlStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRoutingControlStateRequest request;
    public GetRoutingControlStateRequest withRequest(openapisdk.models.shared.GetRoutingControlStateRequest request) {
        this.request = request;
        return this;
    }
}