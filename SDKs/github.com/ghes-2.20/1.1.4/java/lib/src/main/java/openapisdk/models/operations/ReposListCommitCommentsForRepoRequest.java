package openapisdk.models.operations;



public class ReposListCommitCommentsForRepoRequest {
    public ReposListCommitCommentsForRepoPathParams pathParams;
    public ReposListCommitCommentsForRepoRequest withPathParams(ReposListCommitCommentsForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListCommitCommentsForRepoQueryParams queryParams;
    public ReposListCommitCommentsForRepoRequest withQueryParams(ReposListCommitCommentsForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}