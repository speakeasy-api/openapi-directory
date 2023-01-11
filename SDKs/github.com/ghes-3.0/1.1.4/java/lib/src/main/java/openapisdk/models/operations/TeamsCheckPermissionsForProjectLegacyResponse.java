package openapisdk.models.operations;



public class TeamsCheckPermissionsForProjectLegacyResponse {
    public String contentType;
    public TeamsCheckPermissionsForProjectLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCheckPermissionsForProjectLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamProject teamProject;
    public TeamsCheckPermissionsForProjectLegacyResponse withTeamProject(openapisdk.models.shared.TeamProject teamProject) {
        this.teamProject = teamProject;
        return this;
    }
    public TeamsCheckPermissionsForProjectLegacy415ApplicationJson teamsCheckPermissionsForProjectLegacy415ApplicationJSONObject;
    public TeamsCheckPermissionsForProjectLegacyResponse withTeamsCheckPermissionsForProjectLegacy415ApplicationJsonObject(TeamsCheckPermissionsForProjectLegacy415ApplicationJson teamsCheckPermissionsForProjectLegacy415ApplicationJSONObject) {
        this.teamsCheckPermissionsForProjectLegacy415ApplicationJSONObject = teamsCheckPermissionsForProjectLegacy415ApplicationJSONObject;
        return this;
    }
}