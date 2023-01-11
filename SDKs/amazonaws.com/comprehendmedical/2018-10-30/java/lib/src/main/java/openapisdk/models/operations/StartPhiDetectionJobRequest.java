package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartPhiDetectionJobRequest {
    public StartPhiDetectionJobHeaders headers;
    public StartPhiDetectionJobRequest withHeaders(StartPhiDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartPhiDetectionJobRequest request;
    public StartPhiDetectionJobRequest withRequest(openapisdk.models.shared.StartPhiDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}