package openapisdk.models.operations;



public class ListWorkspacesResponse {
    public String contentType;
    public ListWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WorkspaceReadList workspaceReadList;
    public ListWorkspacesResponse withWorkspaceReadList(openapisdk.models.shared.WorkspaceReadList workspaceReadList) {
        this.workspaceReadList = workspaceReadList;
        return this;
    }
}