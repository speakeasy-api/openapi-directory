package openapisdk.models.operations;



public class SearchRequest {
    public SearchQueryParams queryParams;
    public SearchRequest withQueryParams(SearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}