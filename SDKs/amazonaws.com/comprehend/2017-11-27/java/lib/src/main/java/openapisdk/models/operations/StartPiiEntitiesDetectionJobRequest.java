package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartPiiEntitiesDetectionJobRequest {
    public StartPiiEntitiesDetectionJobHeaders headers;
    public StartPiiEntitiesDetectionJobRequest withHeaders(StartPiiEntitiesDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartPiiEntitiesDetectionJobRequest request;
    public StartPiiEntitiesDetectionJobRequest withRequest(openapisdk.models.shared.StartPiiEntitiesDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}