package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugSrcResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugSrcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugSrcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugSrcResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedTreeentries paginatedTreeentries;
    public GetRepositoriesWorkspaceRepoSlugSrcResponse withPaginatedTreeentries(openapisdk.models.shared.PaginatedTreeentries paginatedTreeentries) {
        this.paginatedTreeentries = paginatedTreeentries;
        return this;
    }
}