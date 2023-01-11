package openapisdk.models.operations;



public class ProjectsDeleteResponse {
    public String contentType;
    public ProjectsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsDeleteResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ProjectsDelete403ApplicationJson projectsDelete403ApplicationJSONObject;
    public ProjectsDeleteResponse withProjectsDelete403ApplicationJsonObject(ProjectsDelete403ApplicationJson projectsDelete403ApplicationJSONObject) {
        this.projectsDelete403ApplicationJSONObject = projectsDelete403ApplicationJSONObject;
        return this;
    }
}