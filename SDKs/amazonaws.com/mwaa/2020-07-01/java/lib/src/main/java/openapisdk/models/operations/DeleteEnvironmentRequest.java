package openapisdk.models.operations;



public class DeleteEnvironmentRequest {
    public DeleteEnvironmentPathParams pathParams;
    public DeleteEnvironmentRequest withPathParams(DeleteEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteEnvironmentHeaders headers;
    public DeleteEnvironmentRequest withHeaders(DeleteEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
}