package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTimelineEventRequest {
    public UpdateTimelineEventHeaders headers;
    public UpdateTimelineEventRequest withHeaders(UpdateTimelineEventHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateTimelineEventRequestBody request;
    public UpdateTimelineEventRequest withRequest(UpdateTimelineEventRequestBody request) {
        this.request = request;
        return this;
    }
}