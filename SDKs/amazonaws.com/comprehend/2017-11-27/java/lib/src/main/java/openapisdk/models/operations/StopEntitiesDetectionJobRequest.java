package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopEntitiesDetectionJobRequest {
    public StopEntitiesDetectionJobHeaders headers;
    public StopEntitiesDetectionJobRequest withHeaders(StopEntitiesDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopEntitiesDetectionJobRequest request;
    public StopEntitiesDetectionJobRequest withRequest(openapisdk.models.shared.StopEntitiesDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}