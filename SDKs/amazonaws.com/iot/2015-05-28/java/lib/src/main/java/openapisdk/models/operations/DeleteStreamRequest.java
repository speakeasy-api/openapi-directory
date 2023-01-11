package openapisdk.models.operations;



public class DeleteStreamRequest {
    public DeleteStreamPathParams pathParams;
    public DeleteStreamRequest withPathParams(DeleteStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteStreamHeaders headers;
    public DeleteStreamRequest withHeaders(DeleteStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
}