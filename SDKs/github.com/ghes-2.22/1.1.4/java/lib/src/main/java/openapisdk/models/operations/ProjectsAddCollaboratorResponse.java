package openapisdk.models.operations;



public class ProjectsAddCollaboratorResponse {
    public String contentType;
    public ProjectsAddCollaboratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsAddCollaboratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsAddCollaboratorResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ProjectsAddCollaborator415ApplicationJson projectsAddCollaborator415ApplicationJSONObject;
    public ProjectsAddCollaboratorResponse withProjectsAddCollaborator415ApplicationJsonObject(ProjectsAddCollaborator415ApplicationJson projectsAddCollaborator415ApplicationJSONObject) {
        this.projectsAddCollaborator415ApplicationJSONObject = projectsAddCollaborator415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ProjectsAddCollaboratorResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}