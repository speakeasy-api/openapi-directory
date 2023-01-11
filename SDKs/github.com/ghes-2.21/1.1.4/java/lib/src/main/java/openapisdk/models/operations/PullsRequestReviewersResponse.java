package openapisdk.models.operations;



public class PullsRequestReviewersResponse {
    public String contentType;
    public PullsRequestReviewersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsRequestReviewersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsRequestReviewersResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequestSimple pullRequestSimple;
    public PullsRequestReviewersResponse withPullRequestSimple(openapisdk.models.shared.PullRequestSimple pullRequestSimple) {
        this.pullRequestSimple = pullRequestSimple;
        return this;
    }
}