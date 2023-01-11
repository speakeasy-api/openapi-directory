package openapisdk.models.operations;



public class ListFunctionsByCodeSigningConfigRequest {
    public ListFunctionsByCodeSigningConfigPathParams pathParams;
    public ListFunctionsByCodeSigningConfigRequest withPathParams(ListFunctionsByCodeSigningConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFunctionsByCodeSigningConfigQueryParams queryParams;
    public ListFunctionsByCodeSigningConfigRequest withQueryParams(ListFunctionsByCodeSigningConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFunctionsByCodeSigningConfigHeaders headers;
    public ListFunctionsByCodeSigningConfigRequest withHeaders(ListFunctionsByCodeSigningConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
}