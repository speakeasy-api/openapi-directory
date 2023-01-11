package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pullrequest;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse withPullrequest(java.util.Map<String, Object> pullrequest) {
        this.pullrequest = pullrequest;
        return this;
    }
}