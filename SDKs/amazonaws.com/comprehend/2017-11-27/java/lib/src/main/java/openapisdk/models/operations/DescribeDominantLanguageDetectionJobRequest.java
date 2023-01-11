package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDominantLanguageDetectionJobRequest {
    public DescribeDominantLanguageDetectionJobHeaders headers;
    public DescribeDominantLanguageDetectionJobRequest withHeaders(DescribeDominantLanguageDetectionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDominantLanguageDetectionJobRequest request;
    public DescribeDominantLanguageDetectionJobRequest withRequest(openapisdk.models.shared.DescribeDominantLanguageDetectionJobRequest request) {
        this.request = request;
        return this;
    }
}