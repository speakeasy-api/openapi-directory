package openapisdk.models.operations;



public class ReactionsListForTeamDiscussionCommentResponse {
    public String contentType;
    public ReactionsListForTeamDiscussionCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReactionsListForTeamDiscussionCommentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReactionsListForTeamDiscussionCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Reaction[] reactions;
    public ReactionsListForTeamDiscussionCommentResponse withReactions(openapisdk.models.shared.Reaction[] reactions) {
        this.reactions = reactions;
        return this;
    }
}