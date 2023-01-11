package openapisdk.models.operations;



public class ListFunctionDefinitionsRequest {
    public ListFunctionDefinitionsQueryParams queryParams;
    public ListFunctionDefinitionsRequest withQueryParams(ListFunctionDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFunctionDefinitionsHeaders headers;
    public ListFunctionDefinitionsRequest withHeaders(ListFunctionDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}