package openapisdk.models.operations;



public class DeleteCanaryRequest {
    public DeleteCanaryPathParams pathParams;
    public DeleteCanaryRequest withPathParams(DeleteCanaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCanaryHeaders headers;
    public DeleteCanaryRequest withHeaders(DeleteCanaryHeaders headers) {
        this.headers = headers;
        return this;
    }
}