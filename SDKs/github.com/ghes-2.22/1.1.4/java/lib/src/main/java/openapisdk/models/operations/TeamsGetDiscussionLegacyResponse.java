package openapisdk.models.operations;



public class TeamsGetDiscussionLegacyResponse {
    public String contentType;
    public TeamsGetDiscussionLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsGetDiscussionLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussion teamDiscussion;
    public TeamsGetDiscussionLegacyResponse withTeamDiscussion(openapisdk.models.shared.TeamDiscussion teamDiscussion) {
        this.teamDiscussion = teamDiscussion;
        return this;
    }
}