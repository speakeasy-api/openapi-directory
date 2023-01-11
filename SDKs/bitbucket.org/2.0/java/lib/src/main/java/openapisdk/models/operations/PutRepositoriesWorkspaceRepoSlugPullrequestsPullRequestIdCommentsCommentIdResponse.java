package openapisdk.models.operations;



public class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse {
    public String contentType;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pullrequestComment;
    public PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse withPullrequestComment(java.util.Map<String, Object> pullrequestComment) {
        this.pullrequestComment = pullrequestComment;
        return this;
    }
}