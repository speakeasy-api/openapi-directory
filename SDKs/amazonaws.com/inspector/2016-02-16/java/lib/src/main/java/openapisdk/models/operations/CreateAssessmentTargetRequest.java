package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssessmentTargetRequest {
    public CreateAssessmentTargetHeaders headers;
    public CreateAssessmentTargetRequest withHeaders(CreateAssessmentTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAssessmentTargetRequest request;
    public CreateAssessmentTargetRequest withRequest(openapisdk.models.shared.CreateAssessmentTargetRequest request) {
        this.request = request;
        return this;
    }
}