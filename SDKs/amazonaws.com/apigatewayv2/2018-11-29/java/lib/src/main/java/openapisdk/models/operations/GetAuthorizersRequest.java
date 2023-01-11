package openapisdk.models.operations;



public class GetAuthorizersRequest {
    public GetAuthorizersPathParams pathParams;
    public GetAuthorizersRequest withPathParams(GetAuthorizersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAuthorizersQueryParams queryParams;
    public GetAuthorizersRequest withQueryParams(GetAuthorizersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAuthorizersHeaders headers;
    public GetAuthorizersRequest withHeaders(GetAuthorizersHeaders headers) {
        this.headers = headers;
        return this;
    }
}