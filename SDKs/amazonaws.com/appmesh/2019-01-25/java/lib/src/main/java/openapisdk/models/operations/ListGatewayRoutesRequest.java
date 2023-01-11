package openapisdk.models.operations;



public class ListGatewayRoutesRequest {
    public ListGatewayRoutesPathParams pathParams;
    public ListGatewayRoutesRequest withPathParams(ListGatewayRoutesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListGatewayRoutesQueryParams queryParams;
    public ListGatewayRoutesRequest withQueryParams(ListGatewayRoutesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGatewayRoutesHeaders headers;
    public ListGatewayRoutesRequest withHeaders(ListGatewayRoutesHeaders headers) {
        this.headers = headers;
        return this;
    }
}