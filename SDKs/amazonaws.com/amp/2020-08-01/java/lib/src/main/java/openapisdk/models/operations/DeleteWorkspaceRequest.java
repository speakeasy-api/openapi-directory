package openapisdk.models.operations;



public class DeleteWorkspaceRequest {
    public DeleteWorkspacePathParams pathParams;
    public DeleteWorkspaceRequest withPathParams(DeleteWorkspacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteWorkspaceQueryParams queryParams;
    public DeleteWorkspaceRequest withQueryParams(DeleteWorkspaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteWorkspaceHeaders headers;
    public DeleteWorkspaceRequest withHeaders(DeleteWorkspaceHeaders headers) {
        this.headers = headers;
        return this;
    }
}