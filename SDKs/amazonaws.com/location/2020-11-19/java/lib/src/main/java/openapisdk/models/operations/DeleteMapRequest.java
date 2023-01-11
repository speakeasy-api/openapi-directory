package openapisdk.models.operations;



public class DeleteMapRequest {
    public DeleteMapPathParams pathParams;
    public DeleteMapRequest withPathParams(DeleteMapPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteMapHeaders headers;
    public DeleteMapRequest withHeaders(DeleteMapHeaders headers) {
        this.headers = headers;
        return this;
    }
}