package openapisdk.models.operations;



public class TeamsUpdateDiscussionCommentResponse {
    public String contentType;
    public TeamsUpdateDiscussionCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsUpdateDiscussionCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussionComment teamDiscussionComment;
    public TeamsUpdateDiscussionCommentResponse withTeamDiscussionComment(openapisdk.models.shared.TeamDiscussionComment teamDiscussionComment) {
        this.teamDiscussionComment = teamDiscussionComment;
        return this;
    }
}