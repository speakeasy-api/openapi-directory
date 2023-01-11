package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssessmentControlRequest {
    public UpdateAssessmentControlPathParams pathParams;
    public UpdateAssessmentControlRequest withPathParams(UpdateAssessmentControlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAssessmentControlHeaders headers;
    public UpdateAssessmentControlRequest withHeaders(UpdateAssessmentControlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAssessmentControlRequestBody request;
    public UpdateAssessmentControlRequest withRequest(UpdateAssessmentControlRequestBody request) {
        this.request = request;
        return this;
    }
}