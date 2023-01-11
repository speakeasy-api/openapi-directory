package openapisdk.models.operations;



public class TeamsCheckPermissionsForProjectResponse {
    public String contentType;
    public TeamsCheckPermissionsForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCheckPermissionsForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamProject teamProject;
    public TeamsCheckPermissionsForProjectResponse withTeamProject(openapisdk.models.shared.TeamProject teamProject) {
        this.teamProject = teamProject;
        return this;
    }
}