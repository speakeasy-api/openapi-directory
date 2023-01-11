package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoutingControlRequest {
    public CreateRoutingControlHeaders headers;
    public CreateRoutingControlRequest withHeaders(CreateRoutingControlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRoutingControlRequestBody request;
    public CreateRoutingControlRequest withRequest(CreateRoutingControlRequestBody request) {
        this.request = request;
        return this;
    }
}