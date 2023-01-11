package openapisdk.models.operations;



public class TeamsListProjectsInOrgResponse {
    public String contentType;
    public TeamsListProjectsInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListProjectsInOrgResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListProjectsInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamProject[] teamProjects;
    public TeamsListProjectsInOrgResponse withTeamProjects(openapisdk.models.shared.TeamProject[] teamProjects) {
        this.teamProjects = teamProjects;
        return this;
    }
}