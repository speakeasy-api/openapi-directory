package openapisdk.models.operations;



public class ReactionsListForTeamDiscussionLegacyResponse {
    public String contentType;
    public ReactionsListForTeamDiscussionLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReactionsListForTeamDiscussionLegacyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReactionsListForTeamDiscussionLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction[] reactions;
    public ReactionsListForTeamDiscussionLegacyResponse withReactions(openapisdk.models.shared.Reaction[] reactions) {
        this.reactions = reactions;
        return this;
    }
}