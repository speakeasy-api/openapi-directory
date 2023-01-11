package openapisdk.models.operations;



public class DeleteIntegrationRequest {
    public DeleteIntegrationPathParams pathParams;
    public DeleteIntegrationRequest withPathParams(DeleteIntegrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteIntegrationHeaders headers;
    public DeleteIntegrationRequest withHeaders(DeleteIntegrationHeaders headers) {
        this.headers = headers;
        return this;
    }
}