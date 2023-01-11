package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedDiffstats paginatedDiffstats;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse withPaginatedDiffstats(openapisdk.models.shared.PaginatedDiffstats paginatedDiffstats) {
        this.paginatedDiffstats = paginatedDiffstats;
        return this;
    }
}