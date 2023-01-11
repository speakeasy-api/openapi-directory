package openapisdk.models.operations;



public class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse {
    public String contentType;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> issue;
    public DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withIssue(java.util.Map<String, Object> issue) {
        this.issue = issue;
        return this;
    }
}