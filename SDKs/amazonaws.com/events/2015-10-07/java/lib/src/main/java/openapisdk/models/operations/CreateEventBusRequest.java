package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEventBusRequest {
    public CreateEventBusHeaders headers;
    public CreateEventBusRequest withHeaders(CreateEventBusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEventBusRequest request;
    public CreateEventBusRequest withRequest(openapisdk.models.shared.CreateEventBusRequest request) {
        this.request = request;
        return this;
    }
}