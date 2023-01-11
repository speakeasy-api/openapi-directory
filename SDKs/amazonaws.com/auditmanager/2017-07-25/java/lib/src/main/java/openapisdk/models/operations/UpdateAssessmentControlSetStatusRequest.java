package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssessmentControlSetStatusRequest {
    public UpdateAssessmentControlSetStatusPathParams pathParams;
    public UpdateAssessmentControlSetStatusRequest withPathParams(UpdateAssessmentControlSetStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAssessmentControlSetStatusHeaders headers;
    public UpdateAssessmentControlSetStatusRequest withHeaders(UpdateAssessmentControlSetStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAssessmentControlSetStatusRequestBody request;
    public UpdateAssessmentControlSetStatusRequest withRequest(UpdateAssessmentControlSetStatusRequestBody request) {
        this.request = request;
        return this;
    }
}