package openapisdk.models.operations;



public class GetGroupScoresRequest {
    public GetGroupScoresPathParams pathParams;
    public GetGroupScoresRequest withPathParams(GetGroupScoresPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetGroupScoresQueryParams queryParams;
    public GetGroupScoresRequest withQueryParams(GetGroupScoresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetGroupScoresSecurity security;
    public GetGroupScoresRequest withSecurity(GetGroupScoresSecurity security) {
        this.security = security;
        return this;
    }
}