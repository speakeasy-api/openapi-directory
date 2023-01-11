package openapisdk.models.operations;



public class PullsListReviewCommentsForRepoResponse {
    public String contentType;
    public PullsListReviewCommentsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsListReviewCommentsForRepoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsListReviewCommentsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PullRequestReviewComment[] pullRequestReviewComments;
    public PullsListReviewCommentsForRepoResponse withPullRequestReviewComments(openapisdk.models.shared.PullRequestReviewComment[] pullRequestReviewComments) {
        this.pullRequestReviewComments = pullRequestReviewComments;
        return this;
    }
}