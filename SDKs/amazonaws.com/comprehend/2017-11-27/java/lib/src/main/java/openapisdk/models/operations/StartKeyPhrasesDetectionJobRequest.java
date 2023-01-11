package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartKeyPhrasesDetectionJobRequest {
    public StartKeyPhrasesDetectionJobHeaders headers;
    public StartKeyPhrasesDetectionJobRequest withHeaders(StartKeyPhrasesDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartKeyPhrasesDetectionJobRequest request;
    public StartKeyPhrasesDetectionJobRequest withRequest(openapisdk.models.shared.StartKeyPhrasesDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}