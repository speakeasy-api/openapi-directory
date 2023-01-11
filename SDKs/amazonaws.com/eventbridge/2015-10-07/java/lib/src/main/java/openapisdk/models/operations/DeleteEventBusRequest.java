package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEventBusRequest {
    public DeleteEventBusHeaders headers;
    public DeleteEventBusRequest withHeaders(DeleteEventBusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEventBusRequest request;
    public DeleteEventBusRequest withRequest(openapisdk.models.shared.DeleteEventBusRequest request) {
        this.request = request;
        return this;
    }
}