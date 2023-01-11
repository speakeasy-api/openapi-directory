package openapisdk.models.operations;



public class PullsUpdateReviewCommentResponse {
    public String contentType;
    public PullsUpdateReviewCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsUpdateReviewCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PullRequestReviewComment pullRequestReviewComment;
    public PullsUpdateReviewCommentResponse withPullRequestReviewComment(openapisdk.models.shared.PullRequestReviewComment pullRequestReviewComment) {
        this.pullRequestReviewComment = pullRequestReviewComment;
        return this;
    }
}