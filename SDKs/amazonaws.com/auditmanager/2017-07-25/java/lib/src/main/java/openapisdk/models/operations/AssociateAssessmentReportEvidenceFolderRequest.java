package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateAssessmentReportEvidenceFolderRequest {
    public AssociateAssessmentReportEvidenceFolderPathParams pathParams;
    public AssociateAssessmentReportEvidenceFolderRequest withPathParams(AssociateAssessmentReportEvidenceFolderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssociateAssessmentReportEvidenceFolderHeaders headers;
    public AssociateAssessmentReportEvidenceFolderRequest withHeaders(AssociateAssessmentReportEvidenceFolderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateAssessmentReportEvidenceFolderRequestBody request;
    public AssociateAssessmentReportEvidenceFolderRequest withRequest(AssociateAssessmentReportEvidenceFolderRequestBody request) {
        this.request = request;
        return this;
    }
}