package openapisdk.models.operations;



public class GetScoreRequest {
    public GetScorePathParams pathParams;
    public GetScoreRequest withPathParams(GetScorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScoreQueryParams queryParams;
    public GetScoreRequest withQueryParams(GetScoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetScoreSecurity security;
    public GetScoreRequest withSecurity(GetScoreSecurity security) {
        this.security = security;
        return this;
    }
}