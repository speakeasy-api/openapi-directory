package openapisdk.models.operations;



public class ReposListCommentsForCommitRequest {
    public ReposListCommentsForCommitPathParams pathParams;
    public ReposListCommentsForCommitRequest withPathParams(ReposListCommentsForCommitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReposListCommentsForCommitQueryParams queryParams;
    public ReposListCommentsForCommitRequest withQueryParams(ReposListCommentsForCommitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}