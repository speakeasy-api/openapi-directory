package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRealtimeEndpointRequest {
    public CreateRealtimeEndpointHeaders headers;
    public CreateRealtimeEndpointRequest withHeaders(CreateRealtimeEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRealtimeEndpointInput request;
    public CreateRealtimeEndpointRequest withRequest(openapisdk.models.shared.CreateRealtimeEndpointInput request) {
        this.request = request;
        return this;
    }
}