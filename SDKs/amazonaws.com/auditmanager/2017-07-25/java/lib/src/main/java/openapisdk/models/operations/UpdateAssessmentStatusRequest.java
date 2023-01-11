package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssessmentStatusRequest {
    public UpdateAssessmentStatusPathParams pathParams;
    public UpdateAssessmentStatusRequest withPathParams(UpdateAssessmentStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAssessmentStatusHeaders headers;
    public UpdateAssessmentStatusRequest withHeaders(UpdateAssessmentStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAssessmentStatusRequestBody request;
    public UpdateAssessmentStatusRequest withRequest(UpdateAssessmentStatusRequestBody request) {
        this.request = request;
        return this;
    }
}