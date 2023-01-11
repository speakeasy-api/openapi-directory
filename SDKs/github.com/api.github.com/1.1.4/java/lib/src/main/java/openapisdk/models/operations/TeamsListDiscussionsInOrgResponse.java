package openapisdk.models.operations;



public class TeamsListDiscussionsInOrgResponse {
    public String contentType;
    public TeamsListDiscussionsInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListDiscussionsInOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListDiscussionsInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussion[] teamDiscussions;
    public TeamsListDiscussionsInOrgResponse withTeamDiscussions(openapisdk.models.shared.TeamDiscussion[] teamDiscussions) {
        this.teamDiscussions = teamDiscussions;
        return this;
    }
}