package openapisdk.models.operations;



public class DeleteVirtualRouterRequest {
    public DeleteVirtualRouterPathParams pathParams;
    public DeleteVirtualRouterRequest withPathParams(DeleteVirtualRouterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVirtualRouterQueryParams queryParams;
    public DeleteVirtualRouterRequest withQueryParams(DeleteVirtualRouterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteVirtualRouterHeaders headers;
    public DeleteVirtualRouterRequest withHeaders(DeleteVirtualRouterHeaders headers) {
        this.headers = headers;
        return this;
    }
}