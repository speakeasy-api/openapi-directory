package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopAssessmentRunRequest {
    public StopAssessmentRunHeaders headers;
    public StopAssessmentRunRequest withHeaders(StopAssessmentRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopAssessmentRunRequest request;
    public StopAssessmentRunRequest withRequest(openapisdk.models.shared.StopAssessmentRunRequest request) {
        this.request = request;
        return this;
    }
}