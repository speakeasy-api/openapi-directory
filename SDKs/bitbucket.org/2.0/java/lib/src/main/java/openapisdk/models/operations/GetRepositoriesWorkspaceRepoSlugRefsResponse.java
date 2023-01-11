package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugRefsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugRefsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugRefsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugRefsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedRefs paginatedRefs;
    public GetRepositoriesWorkspaceRepoSlugRefsResponse withPaginatedRefs(openapisdk.models.shared.PaginatedRefs paginatedRefs) {
        this.paginatedRefs = paginatedRefs;
        return this;
    }
}