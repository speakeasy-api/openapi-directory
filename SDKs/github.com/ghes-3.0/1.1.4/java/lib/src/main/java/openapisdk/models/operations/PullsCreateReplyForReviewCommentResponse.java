package openapisdk.models.operations;



public class PullsCreateReplyForReviewCommentResponse {
    public String contentType;
    public PullsCreateReplyForReviewCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsCreateReplyForReviewCommentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsCreateReplyForReviewCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsCreateReplyForReviewCommentResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequestReviewComment pullRequestReviewComment;
    public PullsCreateReplyForReviewCommentResponse withPullRequestReviewComment(openapisdk.models.shared.PullRequestReviewComment pullRequestReviewComment) {
        this.pullRequestReviewComment = pullRequestReviewComment;
        return this;
    }
}