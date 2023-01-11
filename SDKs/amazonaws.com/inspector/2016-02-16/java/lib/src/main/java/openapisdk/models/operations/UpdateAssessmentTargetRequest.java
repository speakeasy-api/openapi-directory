package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssessmentTargetRequest {
    public UpdateAssessmentTargetHeaders headers;
    public UpdateAssessmentTargetRequest withHeaders(UpdateAssessmentTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAssessmentTargetRequest request;
    public UpdateAssessmentTargetRequest withRequest(openapisdk.models.shared.UpdateAssessmentTargetRequest request) {
        this.request = request;
        return this;
    }
}