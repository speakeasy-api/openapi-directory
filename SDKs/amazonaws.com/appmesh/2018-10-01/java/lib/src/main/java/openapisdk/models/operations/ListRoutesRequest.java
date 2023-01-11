package openapisdk.models.operations;



public class ListRoutesRequest {
    public ListRoutesPathParams pathParams;
    public ListRoutesRequest withPathParams(ListRoutesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRoutesQueryParams queryParams;
    public ListRoutesRequest withQueryParams(ListRoutesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRoutesHeaders headers;
    public ListRoutesRequest withHeaders(ListRoutesHeaders headers) {
        this.headers = headers;
        return this;
    }
}