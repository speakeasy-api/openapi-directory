package openapisdk.models.operations;



public class GetSubmissionHistoryRequest {
    public GetSubmissionHistoryPathParams pathParams;
    public GetSubmissionHistoryRequest withPathParams(GetSubmissionHistoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubmissionHistorySecurity security;
    public GetSubmissionHistoryRequest withSecurity(GetSubmissionHistorySecurity security) {
        this.security = security;
        return this;
    }
}