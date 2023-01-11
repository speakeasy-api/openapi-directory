package openapisdk.models.operations;



public class UntrashScoreRequest {
    public UntrashScorePathParams pathParams;
    public UntrashScoreRequest withPathParams(UntrashScorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UntrashScoreSecurity security;
    public UntrashScoreRequest withSecurity(UntrashScoreSecurity security) {
        this.security = security;
        return this;
    }
}