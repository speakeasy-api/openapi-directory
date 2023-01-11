package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEventsRequest {
    public PutEventsHeaders headers;
    public PutEventsRequest withHeaders(PutEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutEventsRequestBody request;
    public PutEventsRequest withRequest(PutEventsRequestBody request) {
        this.request = request;
        return this;
    }
}