package openapisdk.models.operations;



public class ReactionsCreateForTeamDiscussionLegacyResponse {
    public String contentType;
    public ReactionsCreateForTeamDiscussionLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReactionsCreateForTeamDiscussionLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction reaction;
    public ReactionsCreateForTeamDiscussionLegacyResponse withReaction(openapisdk.models.shared.Reaction reaction) {
        this.reaction = reaction;
        return this;
    }
}