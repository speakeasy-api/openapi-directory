package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopEventsDetectionJobRequest {
    public StopEventsDetectionJobHeaders headers;
    public StopEventsDetectionJobRequest withHeaders(StopEventsDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopEventsDetectionJobRequest request;
    public StopEventsDetectionJobRequest withRequest(openapisdk.models.shared.StopEventsDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}