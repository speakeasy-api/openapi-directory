package openapisdk.models.operations;



public class DeleteFunctionRequest {
    public DeleteFunctionPathParams pathParams;
    public DeleteFunctionRequest withPathParams(DeleteFunctionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFunctionHeaders headers;
    public DeleteFunctionRequest withHeaders(DeleteFunctionHeaders headers) {
        this.headers = headers;
        return this;
    }
}