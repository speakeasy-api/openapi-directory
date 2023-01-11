package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartEventsDetectionJobRequest {
    public StartEventsDetectionJobHeaders headers;
    public StartEventsDetectionJobRequest withHeaders(StartEventsDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartEventsDetectionJobRequest request;
    public StartEventsDetectionJobRequest withRequest(openapisdk.models.shared.StartEventsDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}