package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> issue;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse withIssue(java.util.Map<String, Object> issue) {
        this.issue = issue;
        return this;
    }
}