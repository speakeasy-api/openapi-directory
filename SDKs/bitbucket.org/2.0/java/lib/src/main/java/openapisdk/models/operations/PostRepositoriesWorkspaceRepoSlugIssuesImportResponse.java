package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugIssuesImportResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugIssuesImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugIssuesImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugIssuesImportResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.IssueJobStatus issueJobStatus;
    public PostRepositoriesWorkspaceRepoSlugIssuesImportResponse withIssueJobStatus(openapisdk.models.shared.IssueJobStatus issueJobStatus) {
        this.issueJobStatus = issueJobStatus;
        return this;
    }
}