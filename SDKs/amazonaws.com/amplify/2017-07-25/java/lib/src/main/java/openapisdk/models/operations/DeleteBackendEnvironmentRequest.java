package openapisdk.models.operations;



public class DeleteBackendEnvironmentRequest {
    public DeleteBackendEnvironmentPathParams pathParams;
    public DeleteBackendEnvironmentRequest withPathParams(DeleteBackendEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteBackendEnvironmentHeaders headers;
    public DeleteBackendEnvironmentRequest withHeaders(DeleteBackendEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
}