package openapisdk.models.operations;



public class GerUserLikesRequest {
    public GerUserLikesPathParams pathParams;
    public GerUserLikesRequest withPathParams(GerUserLikesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GerUserLikesQueryParams queryParams;
    public GerUserLikesRequest withQueryParams(GerUserLikesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GerUserLikesSecurity security;
    public GerUserLikesRequest withSecurity(GerUserLikesSecurity security) {
        this.security = security;
        return this;
    }
}