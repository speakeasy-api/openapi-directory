package openapisdk.models.operations;



public class TeamsGetDiscussionCommentResponse {
    public String contentType;
    public TeamsGetDiscussionCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsGetDiscussionCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussionComment teamDiscussionComment;
    public TeamsGetDiscussionCommentResponse withTeamDiscussionComment(openapisdk.models.shared.TeamDiscussionComment teamDiscussionComment) {
        this.teamDiscussionComment = teamDiscussionComment;
        return this;
    }
}