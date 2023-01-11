package openapisdk.models.operations;



public class TeamsCheckPermissionsForProjectInOrgResponse {
    public String contentType;
    public TeamsCheckPermissionsForProjectInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCheckPermissionsForProjectInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamProject teamProject;
    public TeamsCheckPermissionsForProjectInOrgResponse withTeamProject(openapisdk.models.shared.TeamProject teamProject) {
        this.teamProject = teamProject;
        return this;
    }
}