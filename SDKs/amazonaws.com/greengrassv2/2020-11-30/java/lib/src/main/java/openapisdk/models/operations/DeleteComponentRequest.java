package openapisdk.models.operations;



public class DeleteComponentRequest {
    public DeleteComponentPathParams pathParams;
    public DeleteComponentRequest withPathParams(DeleteComponentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteComponentHeaders headers;
    public DeleteComponentRequest withHeaders(DeleteComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
}