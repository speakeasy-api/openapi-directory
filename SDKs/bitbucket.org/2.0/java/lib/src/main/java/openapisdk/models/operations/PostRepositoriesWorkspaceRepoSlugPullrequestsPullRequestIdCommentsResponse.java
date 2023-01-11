package openapisdk.models.operations;



public class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse {
    public String contentType;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pullrequestComment;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse withPullrequestComment(java.util.Map<String, Object> pullrequestComment) {
        this.pullrequestComment = pullrequestComment;
        return this;
    }
}