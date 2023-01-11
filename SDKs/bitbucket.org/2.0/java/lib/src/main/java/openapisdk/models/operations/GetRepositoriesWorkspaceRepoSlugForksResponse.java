package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugForksResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugForksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugForksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedRepositories paginatedRepositories;
    public GetRepositoriesWorkspaceRepoSlugForksResponse withPaginatedRepositories(openapisdk.models.shared.PaginatedRepositories paginatedRepositories) {
        this.paginatedRepositories = paginatedRepositories;
        return this;
    }
}