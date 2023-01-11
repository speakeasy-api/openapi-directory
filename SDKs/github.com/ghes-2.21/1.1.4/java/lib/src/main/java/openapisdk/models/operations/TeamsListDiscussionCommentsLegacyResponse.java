package openapisdk.models.operations;



public class TeamsListDiscussionCommentsLegacyResponse {
    public String contentType;
    public TeamsListDiscussionCommentsLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListDiscussionCommentsLegacyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListDiscussionCommentsLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussionComment[] teamDiscussionComments;
    public TeamsListDiscussionCommentsLegacyResponse withTeamDiscussionComments(openapisdk.models.shared.TeamDiscussionComment[] teamDiscussionComments) {
        this.teamDiscussionComments = teamDiscussionComments;
        return this;
    }
}