package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugDeployKeysResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugDeployKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugDeployKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugDeployKeysResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedDeployKeys paginatedDeployKeys;
    public GetRepositoriesWorkspaceRepoSlugDeployKeysResponse withPaginatedDeployKeys(openapisdk.models.shared.PaginatedDeployKeys paginatedDeployKeys) {
        this.paginatedDeployKeys = paginatedDeployKeys;
        return this;
    }
}