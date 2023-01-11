package openapisdk.models.operations;



public class TeamsGetResponse {
    public String contentType;
    public TeamsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamFull teamFull;
    public TeamsGetResponse withTeamFull(openapisdk.models.shared.TeamFull teamFull) {
        this.teamFull = teamFull;
        return this;
    }
}