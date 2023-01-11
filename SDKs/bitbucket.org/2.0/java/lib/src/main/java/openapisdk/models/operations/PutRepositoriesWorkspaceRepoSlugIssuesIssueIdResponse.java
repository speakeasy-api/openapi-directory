package openapisdk.models.operations;



public class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse {
    public String contentType;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> issue;
    public PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withIssue(java.util.Map<String, Object> issue) {
        this.issue = issue;
        return this;
    }
}