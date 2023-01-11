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
    public openapisdk.models.shared.Team team;
    public TeamsUpdateResponse withTeam(openapisdk.models.shared.Team team) {
        this.team = team;
        return this;
    }
}