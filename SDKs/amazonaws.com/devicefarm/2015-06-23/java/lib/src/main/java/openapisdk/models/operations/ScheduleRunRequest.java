package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScheduleRunRequest {
    public ScheduleRunHeaders headers;
    public ScheduleRunRequest withHeaders(ScheduleRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScheduleRunRequest request;
    public ScheduleRunRequest withRequest(openapisdk.models.shared.ScheduleRunRequest request) {
        this.request = request;
        return this;
    }
}