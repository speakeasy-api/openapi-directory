package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLogEventsRequest {
    public PutLogEventsHeaders headers;
    public PutLogEventsRequest withHeaders(PutLogEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutLogEventsRequest request;
    public PutLogEventsRequest withRequest(openapisdk.models.shared.PutLogEventsRequest request) {
        this.request = request;
        return this;
    }
}