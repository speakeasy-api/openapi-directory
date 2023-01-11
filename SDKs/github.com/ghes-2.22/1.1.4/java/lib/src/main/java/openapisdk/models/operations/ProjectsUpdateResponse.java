package openapisdk.models.operations;



public class ProjectsUpdateResponse {
    public String contentType;
    public ProjectsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsUpdateResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public ProjectsUpdateResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public ProjectsUpdate403ApplicationJson projectsUpdate403ApplicationJSONObject;
    public ProjectsUpdateResponse withProjectsUpdate403ApplicationJsonObject(ProjectsUpdate403ApplicationJson projectsUpdate403ApplicationJSONObject) {
        this.projectsUpdate403ApplicationJSONObject = projectsUpdate403ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public ProjectsUpdateResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}