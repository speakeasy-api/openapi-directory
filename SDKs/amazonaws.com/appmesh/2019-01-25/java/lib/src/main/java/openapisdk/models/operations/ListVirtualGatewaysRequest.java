package openapisdk.models.operations;



public class ListVirtualGatewaysRequest {
    public ListVirtualGatewaysPathParams pathParams;
    public ListVirtualGatewaysRequest withPathParams(ListVirtualGatewaysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListVirtualGatewaysQueryParams queryParams;
    public ListVirtualGatewaysRequest withQueryParams(ListVirtualGatewaysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVirtualGatewaysHeaders headers;
    public ListVirtualGatewaysRequest withHeaders(ListVirtualGatewaysHeaders headers) {
        this.headers = headers;
        return this;
    }
}