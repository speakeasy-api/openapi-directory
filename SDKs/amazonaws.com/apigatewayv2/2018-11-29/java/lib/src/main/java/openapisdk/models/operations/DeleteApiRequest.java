package openapisdk.models.operations;



public class DeleteApiRequest {
    public DeleteApiPathParams pathParams;
    public DeleteApiRequest withPathParams(DeleteApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteApiHeaders headers;
    public DeleteApiRequest withHeaders(DeleteApiHeaders headers) {
        this.headers = headers;
        return this;
    }
}