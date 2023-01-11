package openapisdk.models.operations;



public class GetScoreSubmissionsRequest {
    public GetScoreSubmissionsPathParams pathParams;
    public GetScoreSubmissionsRequest withPathParams(GetScoreSubmissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScoreSubmissionsSecurity security;
    public GetScoreSubmissionsRequest withSecurity(GetScoreSubmissionsSecurity security) {
        this.security = security;
        return this;
    }
}