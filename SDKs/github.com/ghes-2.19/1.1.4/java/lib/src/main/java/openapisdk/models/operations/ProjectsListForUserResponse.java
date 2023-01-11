package openapisdk.models.operations;



public class ProjectsListForUserResponse {
    public String contentType;
    public ProjectsListForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ProjectsListForUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ProjectsListForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Project[] projects;
    public ProjectsListForUserResponse withProjects(openapisdk.models.shared.Project[] projects) {
        this.projects = projects;
        return this;
    }
    public ProjectsListForUser415ApplicationJson projectsListForUser415ApplicationJSONObject;
    public ProjectsListForUserResponse withProjectsListForUser415ApplicationJsonObject(ProjectsListForUser415ApplicationJson projectsListForUser415ApplicationJSONObject) {
        this.projectsListForUser415ApplicationJSONObject = projectsListForUser415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ProjectsListForUserResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}