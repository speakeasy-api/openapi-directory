package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSentimentDetectionJobRequest {
    public StartSentimentDetectionJobHeaders headers;
    public StartSentimentDetectionJobRequest withHeaders(StartSentimentDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartSentimentDetectionJobRequest request;
    public StartSentimentDetectionJobRequest withRequest(openapisdk.models.shared.StartSentimentDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}