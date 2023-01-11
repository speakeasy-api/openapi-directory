package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugIssuesImportResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugIssuesImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugIssuesImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugIssuesImportResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.IssueJobStatus issueJobStatus;
    public GetRepositoriesWorkspaceRepoSlugIssuesImportResponse withIssueJobStatus(openapisdk.models.shared.IssueJobStatus issueJobStatus) {
        this.issueJobStatus = issueJobStatus;
        return this;
    }
}