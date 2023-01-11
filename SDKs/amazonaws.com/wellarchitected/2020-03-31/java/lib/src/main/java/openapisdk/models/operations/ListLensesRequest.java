package openapisdk.models.operations;



public class ListLensesRequest {
    public ListLensesQueryParams queryParams;
    public ListLensesRequest withQueryParams(ListLensesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLensesHeaders headers;
    public ListLensesRequest withHeaders(ListLensesHeaders headers) {
        this.headers = headers;
        return this;
    }
}