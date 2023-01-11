package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopPiiEntitiesDetectionJobRequest {
    public StopPiiEntitiesDetectionJobHeaders headers;
    public StopPiiEntitiesDetectionJobRequest withHeaders(StopPiiEntitiesDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopPiiEntitiesDetectionJobRequest request;
    public StopPiiEntitiesDetectionJobRequest withRequest(openapisdk.models.shared.StopPiiEntitiesDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}