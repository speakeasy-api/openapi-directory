package openapisdk.models.operations;



public class TeamsGetDiscussionCommentLegacyResponse {
    public String contentType;
    public TeamsGetDiscussionCommentLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsGetDiscussionCommentLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussionComment teamDiscussionComment;
    public TeamsGetDiscussionCommentLegacyResponse withTeamDiscussionComment(openapisdk.models.shared.TeamDiscussionComment teamDiscussionComment) {
        this.teamDiscussionComment = teamDiscussionComment;
        return this;
    }
}