package openapisdk.models.operations;



public class PullsGetResponse {
    public String contentType;
    public PullsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PullsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public PullsGetResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PullRequest pullRequest;
    public PullsGetResponse withPullRequest(openapisdk.models.shared.PullRequest pullRequest) {
        this.pullRequest = pullRequest;
        return this;
    }
}