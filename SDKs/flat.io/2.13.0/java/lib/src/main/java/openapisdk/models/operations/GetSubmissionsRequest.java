package openapisdk.models.operations;



public class GetSubmissionsRequest {
    public GetSubmissionsPathParams pathParams;
    public GetSubmissionsRequest withPathParams(GetSubmissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSubmissionsSecurity security;
    public GetSubmissionsRequest withSecurity(GetSubmissionsSecurity security) {
        this.security = security;
        return this;
    }
}