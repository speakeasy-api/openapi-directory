package openapisdk.models.operations;



public class DeleteJobRequest {
    public DeleteJobPathParams pathParams;
    public DeleteJobRequest withPathParams(DeleteJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteJobHeaders headers;
    public DeleteJobRequest withHeaders(DeleteJobHeaders headers) {
        this.headers = headers;
        return this;
    }
}