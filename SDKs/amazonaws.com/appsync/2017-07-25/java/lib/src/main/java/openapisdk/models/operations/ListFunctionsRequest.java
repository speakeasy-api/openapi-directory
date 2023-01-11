package openapisdk.models.operations;



public class ListFunctionsRequest {
    public ListFunctionsPathParams pathParams;
    public ListFunctionsRequest withPathParams(ListFunctionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFunctionsQueryParams queryParams;
    public ListFunctionsRequest withQueryParams(ListFunctionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFunctionsHeaders headers;
    public ListFunctionsRequest withHeaders(ListFunctionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}