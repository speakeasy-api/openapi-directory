package openapisdk.models.operations;



public class GetMatchesRequest {
    public GetMatchesPathParams pathParams;
    public GetMatchesRequest withPathParams(GetMatchesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetMatchesQueryParams queryParams;
    public GetMatchesRequest withQueryParams(GetMatchesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMatchesHeaders headers;
    public GetMatchesRequest withHeaders(GetMatchesHeaders headers) {
        this.headers = headers;
        return this;
    }
}