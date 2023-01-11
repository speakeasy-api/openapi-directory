package openapisdk.models.operations;



public class GetEvidenceFoldersByAssessmentRequest {
    public GetEvidenceFoldersByAssessmentPathParams pathParams;
    public GetEvidenceFoldersByAssessmentRequest withPathParams(GetEvidenceFoldersByAssessmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEvidenceFoldersByAssessmentQueryParams queryParams;
    public GetEvidenceFoldersByAssessmentRequest withQueryParams(GetEvidenceFoldersByAssessmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEvidenceFoldersByAssessmentHeaders headers;
    public GetEvidenceFoldersByAssessmentRequest withHeaders(GetEvidenceFoldersByAssessmentHeaders headers) {
        this.headers = headers;
        return this;
    }
}