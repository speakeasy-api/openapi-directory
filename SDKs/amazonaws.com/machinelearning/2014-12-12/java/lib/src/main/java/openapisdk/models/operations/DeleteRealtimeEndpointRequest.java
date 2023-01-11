package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRealtimeEndpointRequest {
    public DeleteRealtimeEndpointHeaders headers;
    public DeleteRealtimeEndpointRequest withHeaders(DeleteRealtimeEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRealtimeEndpointInput request;
    public DeleteRealtimeEndpointRequest withRequest(openapisdk.models.shared.DeleteRealtimeEndpointInput request) {
        this.request = request;
        return this;
    }
}