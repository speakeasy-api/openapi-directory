package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedPullrequestComments paginatedPullrequestComments;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse withPaginatedPullrequestComments(openapisdk.models.shared.PaginatedPullrequestComments paginatedPullrequestComments) {
        this.paginatedPullrequestComments = paginatedPullrequestComments;
        return this;
    }
}