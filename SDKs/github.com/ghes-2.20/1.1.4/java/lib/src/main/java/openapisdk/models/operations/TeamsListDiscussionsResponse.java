package openapisdk.models.operations;



public class TeamsListDiscussionsResponse {
    public String contentType;
    public TeamsListDiscussionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListDiscussionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListDiscussionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussion[] teamDiscussions;
    public TeamsListDiscussionsResponse withTeamDiscussions(openapisdk.models.shared.TeamDiscussion[] teamDiscussions) {
        this.teamDiscussions = teamDiscussions;
        return this;
    }
}