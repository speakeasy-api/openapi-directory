package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pullrequest;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse withPullrequest(java.util.Map<String, Object> pullrequest) {
        this.pullrequest = pullrequest;
        return this;
    }
}