package openapisdk.models.operations;



public class DeleteTokenRequest {
    public DeleteTokenPathParams pathParams;
    public DeleteTokenRequest withPathParams(DeleteTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTokenHeaders headers;
    public DeleteTokenRequest withHeaders(DeleteTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
}