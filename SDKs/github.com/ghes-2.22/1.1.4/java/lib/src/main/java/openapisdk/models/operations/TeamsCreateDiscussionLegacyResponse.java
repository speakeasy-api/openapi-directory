package openapisdk.models.operations;



public class TeamsCreateDiscussionLegacyResponse {
    public String contentType;
    public TeamsCreateDiscussionLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCreateDiscussionLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussion teamDiscussion;
    public TeamsCreateDiscussionLegacyResponse withTeamDiscussion(openapisdk.models.shared.TeamDiscussion teamDiscussion) {
        this.teamDiscussion = teamDiscussion;
        return this;
    }
}