package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoutingControlRequest {
    public UpdateRoutingControlHeaders headers;
    public UpdateRoutingControlRequest withHeaders(UpdateRoutingControlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateRoutingControlRequestBody request;
    public UpdateRoutingControlRequest withRequest(UpdateRoutingControlRequestBody request) {
        this.request = request;
        return this;
    }
}