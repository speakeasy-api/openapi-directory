package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssessmentRequest {
    public CreateAssessmentHeaders headers;
    public CreateAssessmentRequest withHeaders(CreateAssessmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAssessmentRequestBody request;
    public CreateAssessmentRequest withRequest(CreateAssessmentRequestBody request) {
        this.request = request;
        return this;
    }
}