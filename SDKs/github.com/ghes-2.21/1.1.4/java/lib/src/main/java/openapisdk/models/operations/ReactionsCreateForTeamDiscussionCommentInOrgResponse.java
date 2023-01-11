package openapisdk.models.operations;



public class ReactionsCreateForTeamDiscussionCommentInOrgResponse {
    public String contentType;
    public ReactionsCreateForTeamDiscussionCommentInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReactionsCreateForTeamDiscussionCommentInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction reaction;
    public ReactionsCreateForTeamDiscussionCommentInOrgResponse withReaction(openapisdk.models.shared.Reaction reaction) {
        this.reaction = reaction;
        return this;
    }
}