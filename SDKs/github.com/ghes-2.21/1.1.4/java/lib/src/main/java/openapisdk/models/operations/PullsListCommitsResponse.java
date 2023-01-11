package openapisdk.models.operations;



public class PullsListCommitsResponse {
    public String contentType;
    public PullsListCommitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PullsListCommitsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PullsListCommitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Commit[] commits;
    public PullsListCommitsResponse withCommits(openapisdk.models.shared.Commit[] commits) {
        this.commits = commits;
        return this;
    }
}