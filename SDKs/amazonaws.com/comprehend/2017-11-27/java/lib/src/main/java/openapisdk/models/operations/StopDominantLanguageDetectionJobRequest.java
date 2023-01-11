package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopDominantLanguageDetectionJobRequest {
    public StopDominantLanguageDetectionJobHeaders headers;
    public StopDominantLanguageDetectionJobRequest withHeaders(StopDominantLanguageDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopDominantLanguageDetectionJobRequest request;
    public StopDominantLanguageDetectionJobRequest withRequest(openapisdk.models.shared.StopDominantLanguageDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}