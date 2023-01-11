package openapisdk.models.operations;



public class ListBranchesRequest {
    public ListBranchesPathParams pathParams;
    public ListBranchesRequest withPathParams(ListBranchesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBranchesQueryParams queryParams;
    public ListBranchesRequest withQueryParams(ListBranchesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBranchesHeaders headers;
    public ListBranchesRequest withHeaders(ListBranchesHeaders headers) {
        this.headers = headers;
        return this;
    }
}