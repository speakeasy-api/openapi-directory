package openapisdk.models.operations;



public class ProjectsUpdateColumnResponse {
    public String contentType;
    public ProjectsUpdateColumnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProjectsUpdateColumnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsUpdateColumnResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ProjectColumn projectColumn;
    public ProjectsUpdateColumnResponse withProjectColumn(openapisdk.models.shared.ProjectColumn projectColumn) {
        this.projectColumn = projectColumn;
        return this;
    }
}