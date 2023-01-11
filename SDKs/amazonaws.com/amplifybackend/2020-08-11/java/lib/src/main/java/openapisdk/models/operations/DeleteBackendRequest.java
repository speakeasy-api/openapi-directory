package openapisdk.models.operations;



public class DeleteBackendRequest {
    public DeleteBackendPathParams pathParams;
    public DeleteBackendRequest withPathParams(DeleteBackendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteBackendHeaders headers;
    public DeleteBackendRequest withHeaders(DeleteBackendHeaders headers) {
        this.headers = headers;
        return this;
    }
}