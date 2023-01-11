package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTimelineEventRequest {
    public CreateTimelineEventHeaders headers;
    public CreateTimelineEventRequest withHeaders(CreateTimelineEventHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateTimelineEventRequestBody request;
    public CreateTimelineEventRequest withRequest(CreateTimelineEventRequestBody request) {
        this.request = request;
        return this;
    }
}