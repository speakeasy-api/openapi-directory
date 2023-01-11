package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugPullrequestsResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedPullrequests paginatedPullrequests;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsResponse withPaginatedPullrequests(openapisdk.models.shared.PaginatedPullrequests paginatedPullrequests) {
        this.paginatedPullrequests = paginatedPullrequests;
        return this;
    }
}