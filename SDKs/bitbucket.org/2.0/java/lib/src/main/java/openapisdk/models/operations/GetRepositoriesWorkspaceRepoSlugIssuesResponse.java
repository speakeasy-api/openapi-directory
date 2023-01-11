package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugIssuesResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugIssuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugIssuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugIssuesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedIssues paginatedIssues;
    public GetRepositoriesWorkspaceRepoSlugIssuesResponse withPaginatedIssues(openapisdk.models.shared.PaginatedIssues paginatedIssues) {
        this.paginatedIssues = paginatedIssues;
        return this;
    }
}