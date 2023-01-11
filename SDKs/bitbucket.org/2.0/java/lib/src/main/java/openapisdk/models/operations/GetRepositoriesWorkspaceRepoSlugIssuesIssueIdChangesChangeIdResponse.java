package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> issueChange;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse withIssueChange(java.util.Map<String, Object> issueChange) {
        this.issueChange = issueChange;
        return this;
    }
}