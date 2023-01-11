package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeToEventRequest {
    public SubscribeToEventHeaders headers;
    public SubscribeToEventRequest withHeaders(SubscribeToEventHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubscribeToEventRequest request;
    public SubscribeToEventRequest withRequest(openapisdk.models.shared.SubscribeToEventRequest request) {
        this.request = request;
        return this;
    }
}