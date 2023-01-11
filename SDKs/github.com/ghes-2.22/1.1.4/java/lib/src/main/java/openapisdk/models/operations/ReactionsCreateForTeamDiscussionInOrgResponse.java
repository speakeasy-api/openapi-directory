package openapisdk.models.operations;



public class ReactionsCreateForTeamDiscussionInOrgResponse {
    public String contentType;
    public ReactionsCreateForTeamDiscussionInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReactionsCreateForTeamDiscussionInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction reaction;
    public ReactionsCreateForTeamDiscussionInOrgResponse withReaction(openapisdk.models.shared.Reaction reaction) {
        this.reaction = reaction;
        return this;
    }
}