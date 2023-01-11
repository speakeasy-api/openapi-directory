package openapisdk.models.operations;



public class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse {
    public String contentType;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pullrequest;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse withPullrequest(java.util.Map<String, Object> pullrequest) {
        this.pullrequest = pullrequest;
        return this;
    }
}