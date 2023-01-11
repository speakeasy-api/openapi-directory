package openapisdk.models.operations;



public class ListFunctionsRequest {
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