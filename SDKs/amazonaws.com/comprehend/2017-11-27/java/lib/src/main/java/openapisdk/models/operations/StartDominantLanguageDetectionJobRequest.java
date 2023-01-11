package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDominantLanguageDetectionJobRequest {
    public StartDominantLanguageDetectionJobHeaders headers;
    public StartDominantLanguageDetectionJobRequest withHeaders(StartDominantLanguageDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartDominantLanguageDetectionJobRequest request;
    public StartDominantLanguageDetectionJobRequest withRequest(openapisdk.models.shared.StartDominantLanguageDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}