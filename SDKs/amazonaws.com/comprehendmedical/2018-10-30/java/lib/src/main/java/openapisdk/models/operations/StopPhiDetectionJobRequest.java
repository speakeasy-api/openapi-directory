package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopPhiDetectionJobRequest {
    public StopPhiDetectionJobHeaders headers;
    public StopPhiDetectionJobRequest withHeaders(StopPhiDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopPhiDetectionJobRequest request;
    public StopPhiDetectionJobRequest withRequest(openapisdk.models.shared.StopPhiDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}