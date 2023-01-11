package openapisdk.models.operations;



public class ProjectsRemoveCollaboratorResponse {
    public String contentType;
    public ProjectsRemoveCollaboratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsRemoveCollaboratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsRemoveCollaboratorResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ProjectsRemoveCollaborator415ApplicationJson projectsRemoveCollaborator415ApplicationJSONObject;
    public ProjectsRemoveCollaboratorResponse withProjectsRemoveCollaborator415ApplicationJsonObject(ProjectsRemoveCollaborator415ApplicationJson projectsRemoveCollaborator415ApplicationJSONObject) {
        this.projectsRemoveCollaborator415ApplicationJSONObject = projectsRemoveCollaborator415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ProjectsRemoveCollaboratorResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}