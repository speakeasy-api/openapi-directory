package openapisdk.models.operations;



public class GetScoreRevisionDataRequest {
    public GetScoreRevisionDataPathParams pathParams;
    public GetScoreRevisionDataRequest withPathParams(GetScoreRevisionDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScoreRevisionDataQueryParams queryParams;
    public GetScoreRevisionDataRequest withQueryParams(GetScoreRevisionDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetScoreRevisionDataSecurity security;
    public GetScoreRevisionDataRequest withSecurity(GetScoreRevisionDataSecurity security) {
        this.security = security;
        return this;
    }
}