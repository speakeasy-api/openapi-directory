package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopKeyPhrasesDetectionJobRequest {
    public StopKeyPhrasesDetectionJobHeaders headers;
    public StopKeyPhrasesDetectionJobRequest withHeaders(StopKeyPhrasesDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopKeyPhrasesDetectionJobRequest request;
    public StopKeyPhrasesDetectionJobRequest withRequest(openapisdk.models.shared.StopKeyPhrasesDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}