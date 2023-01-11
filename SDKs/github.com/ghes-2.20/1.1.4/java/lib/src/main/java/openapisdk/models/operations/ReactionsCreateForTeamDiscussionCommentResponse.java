package openapisdk.models.operations;



public class ReactionsCreateForTeamDiscussionCommentResponse {
    public String contentType;
    public ReactionsCreateForTeamDiscussionCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReactionsCreateForTeamDiscussionCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction reaction;
    public ReactionsCreateForTeamDiscussionCommentResponse withReaction(openapisdk.models.shared.Reaction reaction) {
        this.reaction = reaction;
        return this;
    }
}