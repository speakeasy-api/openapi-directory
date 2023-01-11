package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugRefsTagsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugRefsTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugRefsTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugRefsTagsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedTags paginatedTags;
    public GetRepositoriesWorkspaceRepoSlugRefsTagsResponse withPaginatedTags(openapisdk.models.shared.PaginatedTags paginatedTags) {
        this.paginatedTags = paginatedTags;
        return this;
    }
}