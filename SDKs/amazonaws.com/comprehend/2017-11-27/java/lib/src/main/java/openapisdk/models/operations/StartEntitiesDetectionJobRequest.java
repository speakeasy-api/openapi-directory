package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartEntitiesDetectionJobRequest {
    public StartEntitiesDetectionJobHeaders headers;
    public StartEntitiesDetectionJobRequest withHeaders(StartEntitiesDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartEntitiesDetectionJobRequest request;
    public StartEntitiesDetectionJobRequest withRequest(openapisdk.models.shared.StartEntitiesDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}