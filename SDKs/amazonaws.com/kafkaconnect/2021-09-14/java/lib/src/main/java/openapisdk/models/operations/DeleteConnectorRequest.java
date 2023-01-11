package openapisdk.models.operations;



public class DeleteConnectorRequest {
    public DeleteConnectorPathParams pathParams;
    public DeleteConnectorRequest withPathParams(DeleteConnectorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConnectorQueryParams queryParams;
    public DeleteConnectorRequest withQueryParams(DeleteConnectorQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteConnectorHeaders headers;
    public DeleteConnectorRequest withHeaders(DeleteConnectorHeaders headers) {
        this.headers = headers;
        return this;
    }
}