package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateAssessmentReportIntegrityRequest {
    public ValidateAssessmentReportIntegrityHeaders headers;
    public ValidateAssessmentReportIntegrityRequest withHeaders(ValidateAssessmentReportIntegrityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ValidateAssessmentReportIntegrityRequestBody request;
    public ValidateAssessmentReportIntegrityRequest withRequest(ValidateAssessmentReportIntegrityRequestBody request) {
        this.request = request;
        return this;
    }
}