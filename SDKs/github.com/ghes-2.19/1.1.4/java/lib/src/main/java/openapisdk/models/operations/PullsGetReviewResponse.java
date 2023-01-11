package openapisdk.models.operations;



public class PullsGetReviewResponse {
    public String contentType;
    public PullsGetReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsGetReviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsGetReviewResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequestReview pullRequestReview;
    public PullsGetReviewResponse withPullRequestReview(openapisdk.models.shared.PullRequestReview pullRequestReview) {
        this.pullRequestReview = pullRequestReview;
        return this;
    }
}