package openapisdk.models.operations;



public class DeleteConnectionRequest {
    public DeleteConnectionPathParams pathParams;
    public DeleteConnectionRequest withPathParams(DeleteConnectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConnectionHeaders headers;
    public DeleteConnectionRequest withHeaders(DeleteConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
}