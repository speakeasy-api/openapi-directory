package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopSentimentDetectionJobRequest {
    public StopSentimentDetectionJobHeaders headers;
    public StopSentimentDetectionJobRequest withHeaders(StopSentimentDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopSentimentDetectionJobRequest request;
    public StopSentimentDetectionJobRequest withRequest(openapisdk.models.shared.StopSentimentDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}