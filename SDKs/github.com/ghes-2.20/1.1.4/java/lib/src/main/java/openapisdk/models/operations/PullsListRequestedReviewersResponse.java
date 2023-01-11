package openapisdk.models.operations;



public class PullsListRequestedReviewersResponse {
    public String contentType;
    public PullsListRequestedReviewersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsListRequestedReviewersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsListRequestedReviewersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PullRequestReviewRequest pullRequestReviewRequest;
    public PullsListRequestedReviewersResponse withPullRequestReviewRequest(openapisdk.models.shared.PullRequestReviewRequest pullRequestReviewRequest) {
        this.pullRequestReviewRequest = pullRequestReviewRequest;
        return this;
    }
}