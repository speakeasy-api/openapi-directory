package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssessmentFrameworkRequest {
    public UpdateAssessmentFrameworkPathParams pathParams;
    public UpdateAssessmentFrameworkRequest withPathParams(UpdateAssessmentFrameworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAssessmentFrameworkHeaders headers;
    public UpdateAssessmentFrameworkRequest withHeaders(UpdateAssessmentFrameworkHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAssessmentFrameworkRequestBody request;
    public UpdateAssessmentFrameworkRequest withRequest(UpdateAssessmentFrameworkRequestBody request) {
        this.request = request;
        return this;
    }
}