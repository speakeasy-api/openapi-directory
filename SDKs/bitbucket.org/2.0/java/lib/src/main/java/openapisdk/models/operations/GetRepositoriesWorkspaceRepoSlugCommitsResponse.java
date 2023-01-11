package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugCommitsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugCommitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugCommitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugCommitsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedChangeset paginatedChangeset;
    public GetRepositoriesWorkspaceRepoSlugCommitsResponse withPaginatedChangeset(openapisdk.models.shared.PaginatedChangeset paginatedChangeset) {
        this.paginatedChangeset = paginatedChangeset;
        return this;
    }
}