package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartAssessmentRunRequest {
    public StartAssessmentRunHeaders headers;
    public StartAssessmentRunRequest withHeaders(StartAssessmentRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartAssessmentRunRequest request;
    public StartAssessmentRunRequest withRequest(openapisdk.models.shared.StartAssessmentRunRequest request) {
        this.request = request;
        return this;
    }
}