package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssessmentReportRequest {
    public CreateAssessmentReportPathParams pathParams;
    public CreateAssessmentReportRequest withPathParams(CreateAssessmentReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateAssessmentReportHeaders headers;
    public CreateAssessmentReportRequest withHeaders(CreateAssessmentReportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAssessmentReportRequestBody request;
    public CreateAssessmentReportRequest withRequest(CreateAssessmentReportRequestBody request) {
        this.request = request;
        return this;
    }
}