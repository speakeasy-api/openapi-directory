package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> issueChange;
    public PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse withIssueChange(java.util.Map<String, Object> issueChange) {
        this.issueChange = issueChange;
        return this;
    }
}