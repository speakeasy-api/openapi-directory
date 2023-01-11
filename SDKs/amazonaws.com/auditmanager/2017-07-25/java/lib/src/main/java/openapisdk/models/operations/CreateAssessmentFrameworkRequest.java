package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssessmentFrameworkRequest {
    public CreateAssessmentFrameworkHeaders headers;
    public CreateAssessmentFrameworkRequest withHeaders(CreateAssessmentFrameworkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAssessmentFrameworkRequestBody request;
    public CreateAssessmentFrameworkRequest withRequest(CreateAssessmentFrameworkRequestBody request) {
        this.request = request;
        return this;
    }
}