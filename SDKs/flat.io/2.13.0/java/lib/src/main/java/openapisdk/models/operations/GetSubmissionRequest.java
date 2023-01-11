package openapisdk.models.operations;



public class GetSubmissionRequest {
    public GetSubmissionPathParams pathParams;
    public GetSubmissionRequest withPathParams(GetSubmissionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubmissionSecurity security;
    public GetSubmissionRequest withSecurity(GetSubmissionSecurity security) {
        this.security = security;
        return this;
    }
}