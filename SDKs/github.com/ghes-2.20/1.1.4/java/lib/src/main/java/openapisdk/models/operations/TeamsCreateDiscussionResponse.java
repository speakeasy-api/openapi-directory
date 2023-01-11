package openapisdk.models.operations;



public class TeamsCreateDiscussionResponse {
    public String contentType;
    public TeamsCreateDiscussionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCreateDiscussionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamDiscussion teamDiscussion;
    public TeamsCreateDiscussionResponse withTeamDiscussion(openapisdk.models.shared.TeamDiscussion teamDiscussion) {
        this.teamDiscussion = teamDiscussion;
        return this;
    }
}