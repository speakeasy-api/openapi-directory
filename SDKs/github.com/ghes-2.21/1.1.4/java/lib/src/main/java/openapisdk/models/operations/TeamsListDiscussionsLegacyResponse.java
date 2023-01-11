package openapisdk.models.operations;



public class TeamsListDiscussionsLegacyResponse {
    public String contentType;
    public TeamsListDiscussionsLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListDiscussionsLegacyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListDiscussionsLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussion[] teamDiscussions;
    public TeamsListDiscussionsLegacyResponse withTeamDiscussions(openapisdk.models.shared.TeamDiscussion[] teamDiscussions) {
        this.teamDiscussions = teamDiscussions;
        return this;
    }
}