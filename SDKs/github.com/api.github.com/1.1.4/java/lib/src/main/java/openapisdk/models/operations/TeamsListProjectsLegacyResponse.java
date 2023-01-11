package openapisdk.models.operations;



public class TeamsListProjectsLegacyResponse {
    public String contentType;
    public TeamsListProjectsLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListProjectsLegacyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListProjectsLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsListProjectsLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.TeamProject[] teamProjects;
    public TeamsListProjectsLegacyResponse withTeamProjects(openapisdk.models.shared.TeamProject[] teamProjects) {
        this.teamProjects = teamProjects;
        return this;
    }
    public TeamsListProjectsLegacy415ApplicationJson teamsListProjectsLegacy415ApplicationJSONObject;
    public TeamsListProjectsLegacyResponse withTeamsListProjectsLegacy415ApplicationJsonObject(TeamsListProjectsLegacy415ApplicationJson teamsListProjectsLegacy415ApplicationJSONObject) {
        this.teamsListProjectsLegacy415ApplicationJSONObject = teamsListProjectsLegacy415ApplicationJSONObject;
        return this;
    }
}