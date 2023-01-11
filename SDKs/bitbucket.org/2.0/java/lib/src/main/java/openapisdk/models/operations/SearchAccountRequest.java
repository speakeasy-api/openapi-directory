package openapisdk.models.operations;



public class SearchAccountRequest {
    public SearchAccountPathParams pathParams;
    public SearchAccountRequest withPathParams(SearchAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SearchAccountQueryParams queryParams;
    public SearchAccountRequest withQueryParams(SearchAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}