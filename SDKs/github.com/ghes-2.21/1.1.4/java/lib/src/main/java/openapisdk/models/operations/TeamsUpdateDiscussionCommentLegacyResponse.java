package openapisdk.models.operations;



public class TeamsUpdateDiscussionCommentLegacyResponse {
    public String contentType;
    public TeamsUpdateDiscussionCommentLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsUpdateDiscussionCommentLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussionComment teamDiscussionComment;
    public TeamsUpdateDiscussionCommentLegacyResponse withTeamDiscussionComment(openapisdk.models.shared.TeamDiscussionComment teamDiscussionComment) {
        this.teamDiscussionComment = teamDiscussionComment;
        return this;
    }
}