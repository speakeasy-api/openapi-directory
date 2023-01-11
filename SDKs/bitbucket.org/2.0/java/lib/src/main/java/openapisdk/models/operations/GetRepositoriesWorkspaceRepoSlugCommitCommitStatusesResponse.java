package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedCommitstatuses paginatedCommitstatuses;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse withPaginatedCommitstatuses(openapisdk.models.shared.PaginatedCommitstatuses paginatedCommitstatuses) {
        this.paginatedCommitstatuses = paginatedCommitstatuses;
        return this;
    }
}