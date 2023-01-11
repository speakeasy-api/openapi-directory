package openapisdk.models.operations;



public class GetUserScoresRequest {
    public GetUserScoresPathParams pathParams;
    public GetUserScoresRequest withPathParams(GetUserScoresPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserScoresQueryParams queryParams;
    public GetUserScoresRequest withQueryParams(GetUserScoresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserScoresSecurity security;
    public GetUserScoresRequest withSecurity(GetUserScoresSecurity security) {
        this.security = security;
        return this;
    }
}