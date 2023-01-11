package openapisdk.models.operations;



public class TeamsCreateDiscussionCommentResponse {
    public String contentType;
    public TeamsCreateDiscussionCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCreateDiscussionCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussionComment teamDiscussionComment;
    public TeamsCreateDiscussionCommentResponse withTeamDiscussionComment(openapisdk.models.shared.TeamDiscussionComment teamDiscussionComment) {
        this.teamDiscussionComment = teamDiscussionComment;
        return this;
    }
}