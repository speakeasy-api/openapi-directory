package openapisdk.models.operations;



public class ProjectsGetResponse {
    public String contentType;
    public ProjectsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsGetResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Project project;
    public ProjectsGetResponse withProject(openapisdk.models.shared.Project project) {
        this.project = project;
        return this;
    }
}