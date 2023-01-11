package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchImportEvidenceToAssessmentControlRequest {
    public BatchImportEvidenceToAssessmentControlPathParams pathParams;
    public BatchImportEvidenceToAssessmentControlRequest withPathParams(BatchImportEvidenceToAssessmentControlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchImportEvidenceToAssessmentControlHeaders headers;
    public BatchImportEvidenceToAssessmentControlRequest withHeaders(BatchImportEvidenceToAssessmentControlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchImportEvidenceToAssessmentControlRequestBody request;
    public BatchImportEvidenceToAssessmentControlRequest withRequest(BatchImportEvidenceToAssessmentControlRequestBody request) {
        this.request = request;
        return this;
    }
}