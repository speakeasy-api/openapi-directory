package openapisdk.models.operations;



public class SearchReposRequest {
    public SearchReposQueryParams queryParams;
    public SearchReposRequest withQueryParams(SearchReposQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}