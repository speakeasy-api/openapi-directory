package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedCommitComments paginatedCommitComments;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse withPaginatedCommitComments(openapisdk.models.shared.PaginatedCommitComments paginatedCommitComments) {
        this.paginatedCommitComments = paginatedCommitComments;
        return this;
    }
}