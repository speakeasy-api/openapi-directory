package openapisdk.models.operations;



public class ReposListPullRequestsAssociatedWithCommitResponse {
    public String contentType;
    public ReposListPullRequestsAssociatedWithCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListPullRequestsAssociatedWithCommitResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListPullRequestsAssociatedWithCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PullRequestSimple[] pullRequestSimples;
    public ReposListPullRequestsAssociatedWithCommitResponse withPullRequestSimples(openapisdk.models.shared.PullRequestSimple[] pullRequestSimples) {
        this.pullRequestSimples = pullRequestSimples;
        return this;
    }
    public ReposListPullRequestsAssociatedWithCommit415ApplicationJson reposListPullRequestsAssociatedWithCommit415ApplicationJSONObject;
    public ReposListPullRequestsAssociatedWithCommitResponse withReposListPullRequestsAssociatedWithCommit415ApplicationJsonObject(ReposListPullRequestsAssociatedWithCommit415ApplicationJson reposListPullRequestsAssociatedWithCommit415ApplicationJSONObject) {
        this.reposListPullRequestsAssociatedWithCommit415ApplicationJSONObject = reposListPullRequestsAssociatedWithCommit415ApplicationJSONObject;
        return this;
    }
}