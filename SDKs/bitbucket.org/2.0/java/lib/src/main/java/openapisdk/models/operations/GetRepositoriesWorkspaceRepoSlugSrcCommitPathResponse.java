package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedTreeentries paginatedTreeentries;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse withPaginatedTreeentries(openapisdk.models.shared.PaginatedTreeentries paginatedTreeentries) {
        this.paginatedTreeentries = paginatedTreeentries;
        return this;
    }
}