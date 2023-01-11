package openapisdk.models.operations;



public class ListTablesRequest {
    public ListTablesPathParams pathParams;
    public ListTablesRequest withPathParams(ListTablesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTablesQueryParams queryParams;
    public ListTablesRequest withQueryParams(ListTablesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTablesHeaders headers;
    public ListTablesRequest withHeaders(ListTablesHeaders headers) {
        this.headers = headers;
        return this;
    }
}