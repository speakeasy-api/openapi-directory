package openapisdk.models.operations;



public class GetTeamMatchupResponse {
    public String contentType;
    public GetTeamMatchupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamMatchupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamMatchup teamMatchup;
    public GetTeamMatchupResponse withTeamMatchup(openapisdk.models.shared.TeamMatchup teamMatchup) {
        this.teamMatchup = teamMatchup;
        return this;
    }
}