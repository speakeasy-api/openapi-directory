package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTopicsDetectionJobRequest {
    public StartTopicsDetectionJobHeaders headers;
    public StartTopicsDetectionJobRequest withHeaders(StartTopicsDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartTopicsDetectionJobRequest request;
    public StartTopicsDetectionJobRequest withRequest(openapisdk.models.shared.StartTopicsDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}