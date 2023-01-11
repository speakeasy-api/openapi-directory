package openapisdk.models.operations;



public class TeamsListDiscussionCommentsResponse {
    public String contentType;
    public TeamsListDiscussionCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListDiscussionCommentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListDiscussionCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussionComment[] teamDiscussionComments;
    public TeamsListDiscussionCommentsResponse withTeamDiscussionComments(openapisdk.models.shared.TeamDiscussionComment[] teamDiscussionComments) {
        this.teamDiscussionComments = teamDiscussionComments;
        return this;
    }
}