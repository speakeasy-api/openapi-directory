package openapisdk.models.operations;



public class SearchVersionsRequest {
    public SearchVersionsPathParams pathParams;
    public SearchVersionsRequest withPathParams(SearchVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SearchVersionsQueryParams queryParams;
    public SearchVersionsRequest withQueryParams(SearchVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}