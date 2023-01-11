package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDisassociateAssessmentReportEvidenceRequest {
    public BatchDisassociateAssessmentReportEvidencePathParams pathParams;
    public BatchDisassociateAssessmentReportEvidenceRequest withPathParams(BatchDisassociateAssessmentReportEvidencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchDisassociateAssessmentReportEvidenceHeaders headers;
    public BatchDisassociateAssessmentReportEvidenceRequest withHeaders(BatchDisassociateAssessmentReportEvidenceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchDisassociateAssessmentReportEvidenceRequestBody request;
    public BatchDisassociateAssessmentReportEvidenceRequest withRequest(BatchDisassociateAssessmentReportEvidenceRequestBody request) {
        this.request = request;
        return this;
    }
}