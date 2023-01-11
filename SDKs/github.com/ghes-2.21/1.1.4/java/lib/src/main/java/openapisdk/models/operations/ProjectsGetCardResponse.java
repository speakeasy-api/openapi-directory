package openapisdk.models.operations;



public class ProjectsGetCardResponse {
    public String contentType;
    public ProjectsGetCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsGetCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsGetCardResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ProjectCard projectCard;
    public ProjectsGetCardResponse withProjectCard(openapisdk.models.shared.ProjectCard projectCard) {
        this.projectCard = projectCard;
        return this;
    }
}