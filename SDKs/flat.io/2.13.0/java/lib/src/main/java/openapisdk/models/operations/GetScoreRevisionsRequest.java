package openapisdk.models.operations;



public class GetScoreRevisionsRequest {
    public GetScoreRevisionsPathParams pathParams;
    public GetScoreRevisionsRequest withPathParams(GetScoreRevisionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScoreRevisionsQueryParams queryParams;
    public GetScoreRevisionsRequest withQueryParams(GetScoreRevisionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetScoreRevisionsSecurity security;
    public GetScoreRevisionsRequest withSecurity(GetScoreRevisionsSecurity security) {
        this.security = security;
        return this;
    }
}