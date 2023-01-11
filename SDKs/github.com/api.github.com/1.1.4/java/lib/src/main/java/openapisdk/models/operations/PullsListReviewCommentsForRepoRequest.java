package openapisdk.models.operations;



public class PullsListReviewCommentsForRepoRequest {
    public PullsListReviewCommentsForRepoPathParams pathParams;
    public PullsListReviewCommentsForRepoRequest withPathParams(PullsListReviewCommentsForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PullsListReviewCommentsForRepoQueryParams queryParams;
    public PullsListReviewCommentsForRepoRequest withQueryParams(PullsListReviewCommentsForRepoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}