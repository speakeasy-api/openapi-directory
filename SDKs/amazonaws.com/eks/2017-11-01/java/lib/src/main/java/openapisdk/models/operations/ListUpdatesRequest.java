package openapisdk.models.operations;



public class ListUpdatesRequest {
    public ListUpdatesPathParams pathParams;
    public ListUpdatesRequest withPathParams(ListUpdatesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUpdatesQueryParams queryParams;
    public ListUpdatesRequest withQueryParams(ListUpdatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUpdatesHeaders headers;
    public ListUpdatesRequest withHeaders(ListUpdatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}