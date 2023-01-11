package openapisdk.models.operations;



public class DeleteDimensionRequest {
    public DeleteDimensionPathParams pathParams;
    public DeleteDimensionRequest withPathParams(DeleteDimensionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDimensionHeaders headers;
    public DeleteDimensionRequest withHeaders(DeleteDimensionHeaders headers) {
        this.headers = headers;
        return this;
    }
}