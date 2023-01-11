package openapisdk.models.operations;



public class DeleteRouteRequest {
    public DeleteRoutePathParams pathParams;
    public DeleteRouteRequest withPathParams(DeleteRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRouteHeaders headers;
    public DeleteRouteRequest withHeaders(DeleteRouteHeaders headers) {
        this.headers = headers;
        return this;
    }
}