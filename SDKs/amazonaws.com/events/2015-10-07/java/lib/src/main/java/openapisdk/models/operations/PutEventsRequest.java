package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEventsRequest {
    public PutEventsHeaders headers;
    public PutEventsRequest withHeaders(PutEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutEventsRequest request;
    public PutEventsRequest withRequest(openapisdk.models.shared.PutEventsRequest request) {
        this.request = request;
        return this;
    }
}