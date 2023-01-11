package openapisdk.models.operations;



public class TeamsCreateResponse {
    public String contentType;
    public TeamsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Team team;
    public TeamsCreateResponse withTeam(openapisdk.models.shared.Team team) {
        this.team = team;
        return this;
    }
}