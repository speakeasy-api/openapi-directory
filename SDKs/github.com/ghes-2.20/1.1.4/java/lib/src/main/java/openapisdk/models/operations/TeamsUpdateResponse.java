package openapisdk.models.operations;



public class TeamsUpdateResponse {
    public String contentType;
    public TeamsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamFull teamFull;
    public TeamsUpdateResponse withTeamFull(openapisdk.models.shared.TeamFull teamFull) {
        this.teamFull = teamFull;
        return this;
    }
}