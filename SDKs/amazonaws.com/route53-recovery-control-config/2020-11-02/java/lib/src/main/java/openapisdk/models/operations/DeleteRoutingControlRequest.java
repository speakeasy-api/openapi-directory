package openapisdk.models.operations;



public class DeleteRoutingControlRequest {
    public DeleteRoutingControlPathParams pathParams;
    public DeleteRoutingControlRequest withPathParams(DeleteRoutingControlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteRoutingControlHeaders headers;
    public DeleteRoutingControlRequest withHeaders(DeleteRoutingControlHeaders headers) {
        this.headers = headers;
        return this;
    }
}