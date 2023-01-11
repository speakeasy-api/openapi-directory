package openapisdk.models.operations;



public class ReactionsCreateForTeamDiscussionResponse {
    public String contentType;
    public ReactionsCreateForTeamDiscussionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReactionsCreateForTeamDiscussionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction reaction;
    public ReactionsCreateForTeamDiscussionResponse withReaction(openapisdk.models.shared.Reaction reaction) {
        this.reaction = reaction;
        return this;
    }
}