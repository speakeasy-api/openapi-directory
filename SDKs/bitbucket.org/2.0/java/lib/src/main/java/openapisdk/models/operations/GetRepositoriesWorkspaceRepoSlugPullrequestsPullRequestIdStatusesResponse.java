package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedCommitstatuses paginatedCommitstatuses;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse withPaginatedCommitstatuses(openapisdk.models.shared.PaginatedCommitstatuses paginatedCommitstatuses) {
        this.paginatedCommitstatuses = paginatedCommitstatuses;
        return this;
    }
}