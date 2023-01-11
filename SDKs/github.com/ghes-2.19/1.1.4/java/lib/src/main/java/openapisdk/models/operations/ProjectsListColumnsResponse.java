package openapisdk.models.operations;



public class ProjectsListColumnsResponse {
    public String contentType;
    public ProjectsListColumnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ProjectsListColumnsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ProjectsListColumnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ProjectsListColumnsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ProjectColumn[] projectColumns;
    public ProjectsListColumnsResponse withProjectColumns(openapisdk.models.shared.ProjectColumn[] projectColumns) {
        this.projectColumns = projectColumns;
        return this;
    }
}