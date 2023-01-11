package openapisdk.models.operations;



public class TeamsUpdateDiscussionResponse {
    public String contentType;
    public TeamsUpdateDiscussionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsUpdateDiscussionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussion teamDiscussion;
    public TeamsUpdateDiscussionResponse withTeamDiscussion(openapisdk.models.shared.TeamDiscussion teamDiscussion) {
        this.teamDiscussion = teamDiscussion;
        return this;
    }
}