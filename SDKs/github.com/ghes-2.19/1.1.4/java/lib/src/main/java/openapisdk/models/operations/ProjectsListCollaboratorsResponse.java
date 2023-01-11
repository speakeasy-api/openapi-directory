package openapisdk.models.operations;



public class ProjectsListCollaboratorsResponse {
    public String contentType;
    public ProjectsListCollaboratorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ProjectsListCollaboratorsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ProjectsListCollaboratorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsListCollaboratorsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ProjectsListCollaborators415ApplicationJson projectsListCollaborators415ApplicationJSONObject;
    public ProjectsListCollaboratorsResponse withProjectsListCollaborators415ApplicationJsonObject(ProjectsListCollaborators415ApplicationJson projectsListCollaborators415ApplicationJSONObject) {
        this.projectsListCollaborators415ApplicationJSONObject = projectsListCollaborators415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.SimpleUser[] simpleUsers;
    public ProjectsListCollaboratorsResponse withSimpleUsers(openapisdk.models.shared.SimpleUser[] simpleUsers) {
        this.simpleUsers = simpleUsers;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ProjectsListCollaboratorsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}