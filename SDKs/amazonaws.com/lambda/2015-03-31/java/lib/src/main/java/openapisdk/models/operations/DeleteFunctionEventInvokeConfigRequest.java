package openapisdk.models.operations;



public class DeleteFunctionEventInvokeConfigRequest {
    public DeleteFunctionEventInvokeConfigPathParams pathParams;
    public DeleteFunctionEventInvokeConfigRequest withPathParams(DeleteFunctionEventInvokeConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFunctionEventInvokeConfigQueryParams queryParams;
    public DeleteFunctionEventInvokeConfigRequest withQueryParams(DeleteFunctionEventInvokeConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteFunctionEventInvokeConfigHeaders headers;
    public DeleteFunctionEventInvokeConfigRequest withHeaders(DeleteFunctionEventInvokeConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
}