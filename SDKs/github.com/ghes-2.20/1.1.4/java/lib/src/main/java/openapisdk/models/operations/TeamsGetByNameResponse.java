package openapisdk.models.operations;



public class TeamsGetByNameResponse {
    public String contentType;
    public TeamsGetByNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsGetByNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsGetByNameResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.TeamFull teamFull;
    public TeamsGetByNameResponse withTeamFull(openapisdk.models.shared.TeamFull teamFull) {
        this.teamFull = teamFull;
        return this;
    }
}