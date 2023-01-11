package openapisdk.models.operations;



public class DeleteControlRequest {
    public DeleteControlPathParams pathParams;
    public DeleteControlRequest withPathParams(DeleteControlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteControlHeaders headers;
    public DeleteControlRequest withHeaders(DeleteControlHeaders headers) {
        this.headers = headers;
        return this;
    }
}