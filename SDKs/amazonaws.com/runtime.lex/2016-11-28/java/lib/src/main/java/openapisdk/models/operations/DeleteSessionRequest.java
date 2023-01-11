package openapisdk.models.operations;



public class DeleteSessionRequest {
    public DeleteSessionPathParams pathParams;
    public DeleteSessionRequest withPathParams(DeleteSessionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSessionHeaders headers;
    public DeleteSessionRequest withHeaders(DeleteSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
}