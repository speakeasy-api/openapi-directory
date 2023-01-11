package openapisdk.models.operations;



public class ReposListBranchesRequest {
    public ReposListBranchesPathParams pathParams;
    public ReposListBranchesRequest withPathParams(ReposListBranchesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListBranchesQueryParams queryParams;
    public ReposListBranchesRequest withQueryParams(ReposListBranchesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}