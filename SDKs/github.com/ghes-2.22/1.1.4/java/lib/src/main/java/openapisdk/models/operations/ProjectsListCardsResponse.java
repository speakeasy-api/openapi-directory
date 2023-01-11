package openapisdk.models.operations;



public class ProjectsListCardsResponse {
    public String contentType;
    public ProjectsListCardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ProjectsListCardsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ProjectsListCardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsListCardsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ProjectCard[] projectCards;
    public ProjectsListCardsResponse withProjectCards(openapisdk.models.shared.ProjectCard[] projectCards) {
        this.projectCards = projectCards;
        return this;
    }
}