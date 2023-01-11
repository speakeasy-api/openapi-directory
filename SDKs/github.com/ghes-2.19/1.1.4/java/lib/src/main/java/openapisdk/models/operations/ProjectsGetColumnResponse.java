package openapisdk.models.operations;



public class ProjectsGetColumnResponse {
    public String contentType;
    public ProjectsGetColumnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsGetColumnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsGetColumnResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ProjectColumn projectColumn;
    public ProjectsGetColumnResponse withProjectColumn(openapisdk.models.shared.ProjectColumn projectColumn) {
        this.projectColumn = projectColumn;
        return this;
    }
}