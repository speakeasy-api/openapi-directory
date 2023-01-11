package openapisdk.models.operations;



public class ListFindingsFiltersRequest {
    public ListFindingsFiltersQueryParams queryParams;
    public ListFindingsFiltersRequest withQueryParams(ListFindingsFiltersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFindingsFiltersHeaders headers;
    public ListFindingsFiltersRequest withHeaders(ListFindingsFiltersHeaders headers) {
        this.headers = headers;
        return this;
    }
}