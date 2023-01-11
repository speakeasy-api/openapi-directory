package openapisdk.models.operations;



public class ListVirtualRoutersRequest {
    public ListVirtualRoutersPathParams pathParams;
    public ListVirtualRoutersRequest withPathParams(ListVirtualRoutersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListVirtualRoutersQueryParams queryParams;
    public ListVirtualRoutersRequest withQueryParams(ListVirtualRoutersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVirtualRoutersHeaders headers;
    public ListVirtualRoutersRequest withHeaders(ListVirtualRoutersHeaders headers) {
        this.headers = headers;
        return this;
    }
}