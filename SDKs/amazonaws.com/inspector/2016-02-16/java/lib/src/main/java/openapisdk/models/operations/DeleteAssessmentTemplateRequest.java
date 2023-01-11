package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAssessmentTemplateRequest {
    public DeleteAssessmentTemplateHeaders headers;
    public DeleteAssessmentTemplateRequest withHeaders(DeleteAssessmentTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAssessmentTemplateRequest request;
    public DeleteAssessmentTemplateRequest withRequest(openapisdk.models.shared.DeleteAssessmentTemplateRequest request) {
        this.request = request;
        return this;
    }
}