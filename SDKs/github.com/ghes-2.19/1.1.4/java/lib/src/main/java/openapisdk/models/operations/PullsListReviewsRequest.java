package openapisdk.models.operations;



public class PullsListReviewsRequest {
    public PullsListReviewsPathParams pathParams;
    public PullsListReviewsRequest withPathParams(PullsListReviewsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PullsListReviewsQueryParams queryParams;
    public PullsListReviewsRequest withQueryParams(PullsListReviewsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}