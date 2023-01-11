package openapisdk.models.operations;



public class DeleteFunctionRequest {
    public DeleteFunctionPathParams pathParams;
    public DeleteFunctionRequest withPathParams(DeleteFunctionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFunctionQueryParams queryParams;
    public DeleteFunctionRequest withQueryParams(DeleteFunctionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteFunctionHeaders headers;
    public DeleteFunctionRequest withHeaders(DeleteFunctionHeaders headers) {
        this.headers = headers;
        return this;
    }
}