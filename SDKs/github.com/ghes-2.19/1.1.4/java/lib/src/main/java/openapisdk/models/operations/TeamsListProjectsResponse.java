package openapisdk.models.operations;



public class TeamsListProjectsResponse {
    public String contentType;
    public TeamsListProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListProjectsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamProject[] teamProjects;
    public TeamsListProjectsResponse withTeamProjects(openapisdk.models.shared.TeamProject[] teamProjects) {
        this.teamProjects = teamProjects;
        return this;
    }
}