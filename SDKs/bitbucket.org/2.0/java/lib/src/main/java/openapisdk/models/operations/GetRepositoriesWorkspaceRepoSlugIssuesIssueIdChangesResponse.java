package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedLogEntries paginatedLogEntries;
    public GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse withPaginatedLogEntries(openapisdk.models.shared.PaginatedLogEntries paginatedLogEntries) {
        this.paginatedLogEntries = paginatedLogEntries;
        return this;
    }
}