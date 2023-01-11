package openapisdk.models.operations;



public class ProjectsCreateCardResponse {
    public String contentType;
    public ProjectsCreateCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsCreateCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsCreateCardResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ProjectCard projectCard;
    public ProjectsCreateCardResponse withProjectCard(openapisdk.models.shared.ProjectCard projectCard) {
        this.projectCard = projectCard;
        return this;
    }
    public Object projectsCreateCard422ApplicationJSONOneOf;
    public ProjectsCreateCardResponse withProjectsCreateCard422ApplicationJsonOneOf(Object projectsCreateCard422ApplicationJSONOneOf) {
        this.projectsCreateCard422ApplicationJSONOneOf = projectsCreateCard422ApplicationJSONOneOf;
        return this;
    }
    public ProjectsCreateCard503ApplicationJson projectsCreateCard503ApplicationJSONObject;
    public ProjectsCreateCardResponse withProjectsCreateCard503ApplicationJsonObject(ProjectsCreateCard503ApplicationJson projectsCreateCard503ApplicationJSONObject) {
        this.projectsCreateCard503ApplicationJSONObject = projectsCreateCard503ApplicationJSONObject;
        return this;
    }
}