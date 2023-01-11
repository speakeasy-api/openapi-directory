package openapisdk.models.operations;



public class ListFunctionEventInvokeConfigsRequest {
    public ListFunctionEventInvokeConfigsPathParams pathParams;
    public ListFunctionEventInvokeConfigsRequest withPathParams(ListFunctionEventInvokeConfigsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFunctionEventInvokeConfigsQueryParams queryParams;
    public ListFunctionEventInvokeConfigsRequest withQueryParams(ListFunctionEventInvokeConfigsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFunctionEventInvokeConfigsHeaders headers;
    public ListFunctionEventInvokeConfigsRequest withHeaders(ListFunctionEventInvokeConfigsHeaders headers) {
        this.headers = headers;
        return this;
    }
}