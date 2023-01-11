package openapisdk.models.operations;



public class ListRoutingControlsRequest {
    public ListRoutingControlsPathParams pathParams;
    public ListRoutingControlsRequest withPathParams(ListRoutingControlsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRoutingControlsQueryParams queryParams;
    public ListRoutingControlsRequest withQueryParams(ListRoutingControlsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRoutingControlsHeaders headers;
    public ListRoutingControlsRequest withHeaders(ListRoutingControlsHeaders headers) {
        this.headers = headers;
        return this;
    }
}