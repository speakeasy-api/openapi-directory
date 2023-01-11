package openapisdk.models.operations;



public class GetFunctionEventInvokeConfigRequest {
    public GetFunctionEventInvokeConfigPathParams pathParams;
    public GetFunctionEventInvokeConfigRequest withPathParams(GetFunctionEventInvokeConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFunctionEventInvokeConfigQueryParams queryParams;
    public GetFunctionEventInvokeConfigRequest withQueryParams(GetFunctionEventInvokeConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFunctionEventInvokeConfigHeaders headers;
    public GetFunctionEventInvokeConfigRequest withHeaders(GetFunctionEventInvokeConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
}