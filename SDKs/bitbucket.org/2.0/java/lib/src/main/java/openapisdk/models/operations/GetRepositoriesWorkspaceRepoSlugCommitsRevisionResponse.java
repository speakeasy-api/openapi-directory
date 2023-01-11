package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedChangeset paginatedChangeset;
    public GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse withPaginatedChangeset(openapisdk.models.shared.PaginatedChangeset paginatedChangeset) {
        this.paginatedChangeset = paginatedChangeset;
        return this;
    }
}