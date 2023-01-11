package openapisdk.models.operations;



public class IssuesListCommentsForRepoRequest {
    public IssuesListCommentsForRepoPathParams pathParams;
    public IssuesListCommentsForRepoRequest withPathParams(IssuesListCommentsForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IssuesListCommentsForRepoQueryParams queryParams;
    public IssuesListCommentsForRepoRequest withQueryParams(IssuesListCommentsForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}