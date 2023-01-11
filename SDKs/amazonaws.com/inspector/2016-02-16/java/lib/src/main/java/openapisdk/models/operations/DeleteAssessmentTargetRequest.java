package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAssessmentTargetRequest {
    public DeleteAssessmentTargetHeaders headers;
    public DeleteAssessmentTargetRequest withHeaders(DeleteAssessmentTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAssessmentTargetRequest request;
    public DeleteAssessmentTargetRequest withRequest(openapisdk.models.shared.DeleteAssessmentTargetRequest request) {
        this.request = request;
        return this;
    }
}