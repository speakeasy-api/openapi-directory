package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAssessmentRunRequest {
    public DeleteAssessmentRunHeaders headers;
    public DeleteAssessmentRunRequest withHeaders(DeleteAssessmentRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAssessmentRunRequest request;
    public DeleteAssessmentRunRequest withRequest(openapisdk.models.shared.DeleteAssessmentRunRequest request) {
        this.request = request;
        return this;
    }
}