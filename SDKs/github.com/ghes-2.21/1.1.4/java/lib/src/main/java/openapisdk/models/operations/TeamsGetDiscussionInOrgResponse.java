package openapisdk.models.operations;



public class TeamsGetDiscussionInOrgResponse {
    public String contentType;
    public TeamsGetDiscussionInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsGetDiscussionInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussion teamDiscussion;
    public TeamsGetDiscussionInOrgResponse withTeamDiscussion(openapisdk.models.shared.TeamDiscussion teamDiscussion) {
        this.teamDiscussion = teamDiscussion;
        return this;
    }
}