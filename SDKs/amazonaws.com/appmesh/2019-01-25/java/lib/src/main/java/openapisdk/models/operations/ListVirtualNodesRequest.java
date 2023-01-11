package openapisdk.models.operations;



public class ListVirtualNodesRequest {
    public ListVirtualNodesPathParams pathParams;
    public ListVirtualNodesRequest withPathParams(ListVirtualNodesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListVirtualNodesQueryParams queryParams;
    public ListVirtualNodesRequest withQueryParams(ListVirtualNodesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVirtualNodesHeaders headers;
    public ListVirtualNodesRequest withHeaders(ListVirtualNodesHeaders headers) {
        this.headers = headers;
        return this;
    }
}