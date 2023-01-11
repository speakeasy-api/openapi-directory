package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pullrequestComment;
    public GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse withPullrequestComment(java.util.Map<String, Object> pullrequestComment) {
        this.pullrequestComment = pullrequestComment;
        return this;
    }
}