package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugIssuesResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugIssuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRepositoriesWorkspaceRepoSlugIssuesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugIssuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugIssuesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> issue;
    public PostRepositoriesWorkspaceRepoSlugIssuesResponse withIssue(java.util.Map<String, Object> issue) {
        this.issue = issue;
        return this;
    }
}