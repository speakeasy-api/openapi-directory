package openapisdk.models.operations;



public class GetTokenRequest {
    public GetTokenPathParams pathParams;
    public GetTokenRequest withPathParams(GetTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTokenQueryParams queryParams;
    public GetTokenRequest withQueryParams(GetTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}