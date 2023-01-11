package openapisdk.models.operations;



public class TeamsListDiscussionCommentsInOrgResponse {
    public String contentType;
    public TeamsListDiscussionCommentsInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListDiscussionCommentsInOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListDiscussionCommentsInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussionComment[] teamDiscussionComments;
    public TeamsListDiscussionCommentsInOrgResponse withTeamDiscussionComments(openapisdk.models.shared.TeamDiscussionComment[] teamDiscussionComments) {
        this.teamDiscussionComments = teamDiscussionComments;
        return this;
    }
}