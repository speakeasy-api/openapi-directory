package openapisdk.models.operations;



public class GetWorkspacesWorkspaceResponse {
    public String contentType;
    public GetWorkspacesWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetWorkspacesWorkspaceResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> workspace;
    public GetWorkspacesWorkspaceResponse withWorkspace(java.util.Map<String, Object> workspace) {
        this.workspace = workspace;
        return this;
    }
}