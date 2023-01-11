package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssessmentTemplateRequest {
    public CreateAssessmentTemplateHeaders headers;
    public CreateAssessmentTemplateRequest withHeaders(CreateAssessmentTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAssessmentTemplateRequest request;
    public CreateAssessmentTemplateRequest withRequest(openapisdk.models.shared.CreateAssessmentTemplateRequest request) {
        this.request = request;
        return this;
    }
}