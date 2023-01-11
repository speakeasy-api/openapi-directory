package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugVersionsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugVersionsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedVersions paginatedVersions;
    public GetRepositoriesWorkspaceRepoSlugVersionsResponse withPaginatedVersions(openapisdk.models.shared.PaginatedVersions paginatedVersions) {
        this.paginatedVersions = paginatedVersions;
        return this;
    }
}