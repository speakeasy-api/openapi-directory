package openapisdk.models.operations;



public class IssuesListForRepoRequest {
    public IssuesListForRepoPathParams pathParams;
    public IssuesListForRepoRequest withPathParams(IssuesListForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IssuesListForRepoQueryParams queryParams;
    public IssuesListForRepoRequest withQueryParams(IssuesListForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}