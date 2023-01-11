package openapisdk.models.operations;



public class GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse {
    public String contentType;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> commitComment;
    public GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse withCommitComment(java.util.Map<String, Object> commitComment) {
        this.commitComment = commitComment;
        return this;
    }
}