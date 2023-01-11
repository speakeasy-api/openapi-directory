package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedChangeset paginatedChangeset;
    public PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse withPaginatedChangeset(openapisdk.models.shared.PaginatedChangeset paginatedChangeset) {
        this.paginatedChangeset = paginatedChangeset;
        return this;
    }
}