package openapisdk.models.operations;



public class GetScoreRevisionRequest {
    public GetScoreRevisionPathParams pathParams;
    public GetScoreRevisionRequest withPathParams(GetScoreRevisionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScoreRevisionQueryParams queryParams;
    public GetScoreRevisionRequest withQueryParams(GetScoreRevisionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetScoreRevisionSecurity security;
    public GetScoreRevisionRequest withSecurity(GetScoreRevisionSecurity security) {
        this.security = security;
        return this;
    }
}