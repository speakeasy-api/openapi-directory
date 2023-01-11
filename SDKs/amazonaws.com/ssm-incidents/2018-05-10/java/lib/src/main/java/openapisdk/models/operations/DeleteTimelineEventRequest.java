package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTimelineEventRequest {
    public DeleteTimelineEventHeaders headers;
    public DeleteTimelineEventRequest withHeaders(DeleteTimelineEventHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteTimelineEventRequestBody request;
    public DeleteTimelineEventRequest withRequest(DeleteTimelineEventRequestBody request) {
        this.request = request;
        return this;
    }
}