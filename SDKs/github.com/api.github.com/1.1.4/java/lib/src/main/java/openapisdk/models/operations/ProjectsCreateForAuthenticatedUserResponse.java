package openapisdk.models.operations;



public class ProjectsCreateForAuthenticatedUserResponse {
    public String contentType;
    public ProjectsCreateForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsCreateForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsCreateForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public ProjectsCreateForAuthenticatedUserResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
    public ProjectsCreateForAuthenticatedUser415ApplicationJson projectsCreateForAuthenticatedUser415ApplicationJSONObject;
    public ProjectsCreateForAuthenticatedUserResponse withProjectsCreateForAuthenticatedUser415ApplicationJsonObject(ProjectsCreateForAuthenticatedUser415ApplicationJson projectsCreateForAuthenticatedUser415ApplicationJSONObject) {
        this.projectsCreateForAuthenticatedUser415ApplicationJSONObject = projectsCreateForAuthenticatedUser415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorSimple validationErrorSimple;
    public ProjectsCreateForAuthenticatedUserResponse withValidationErrorSimple(openapisdk.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
}