package openapisdk.models.operations;



public class ReposListCommitsRequest {
    public ReposListCommitsPathParams pathParams;
    public ReposListCommitsRequest withPathParams(ReposListCommitsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListCommitsQueryParams queryParams;
    public ReposListCommitsRequest withQueryParams(ReposListCommitsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}