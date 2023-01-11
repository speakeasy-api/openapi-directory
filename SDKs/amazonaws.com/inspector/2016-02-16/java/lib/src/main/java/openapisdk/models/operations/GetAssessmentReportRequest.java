package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssessmentReportRequest {
    public GetAssessmentReportHeaders headers;
    public GetAssessmentReportRequest withHeaders(GetAssessmentReportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAssessmentReportRequest request;
    public GetAssessmentReportRequest withRequest(openapisdk.models.shared.GetAssessmentReportRequest request) {
        this.request = request;
        return this;
    }
}