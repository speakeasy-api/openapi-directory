package openapisdk.models.operations;



public class ReactionsListForTeamDiscussionInOrgResponse {
    public String contentType;
    public ReactionsListForTeamDiscussionInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReactionsListForTeamDiscussionInOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReactionsListForTeamDiscussionInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction[] reactions;
    public ReactionsListForTeamDiscussionInOrgResponse withReactions(openapisdk.models.shared.Reaction[] reactions) {
        this.reactions = reactions;
        return this;
    }
}