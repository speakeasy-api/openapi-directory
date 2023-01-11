package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScheduleApiTriggeredCanvasesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ScheduleApiTriggeredCanvasesRequestBody request;
    public ScheduleApiTriggeredCanvasesRequest withRequest(ScheduleApiTriggeredCanvasesRequestBody request) {
        this.request = request;
        return this;
    }
}