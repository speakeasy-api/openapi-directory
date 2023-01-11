package openapisdk.models.operations;



public class PullsListReviewsResponse {
    public String contentType;
    public PullsListReviewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsListReviewsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsListReviewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PullRequestReview[] pullRequestReviews;
    public PullsListReviewsResponse withPullRequestReviews(openapisdk.models.shared.PullRequestReview[] pullRequestReviews) {
        this.pullRequestReviews = pullRequestReviews;
        return this;
    }
}