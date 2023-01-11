package openapisdk.models.operations;



public class DeleteGatewayRouteRequest {
    public DeleteGatewayRoutePathParams pathParams;
    public DeleteGatewayRouteRequest withPathParams(DeleteGatewayRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteGatewayRouteQueryParams queryParams;
    public DeleteGatewayRouteRequest withQueryParams(DeleteGatewayRouteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteGatewayRouteHeaders headers;
    public DeleteGatewayRouteRequest withHeaders(DeleteGatewayRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
}