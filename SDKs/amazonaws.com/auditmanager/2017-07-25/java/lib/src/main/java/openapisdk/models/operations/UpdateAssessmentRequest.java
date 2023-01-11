package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssessmentRequest {
    public UpdateAssessmentPathParams pathParams;
    public UpdateAssessmentRequest withPathParams(UpdateAssessmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAssessmentHeaders headers;
    public UpdateAssessmentRequest withHeaders(UpdateAssessmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAssessmentRequestBody request;
    public UpdateAssessmentRequest withRequest(UpdateAssessmentRequestBody request) {
        this.request = request;
        return this;
    }
}