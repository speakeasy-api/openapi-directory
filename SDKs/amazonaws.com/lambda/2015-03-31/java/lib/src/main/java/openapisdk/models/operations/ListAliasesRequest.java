package openapisdk.models.operations;



public class ListAliasesRequest {
    public ListAliasesPathParams pathParams;
    public ListAliasesRequest withPathParams(ListAliasesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAliasesQueryParams queryParams;
    public ListAliasesRequest withQueryParams(ListAliasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAliasesHeaders headers;
    public ListAliasesRequest withHeaders(ListAliasesHeaders headers) {
        this.headers = headers;
        return this;
    }
}