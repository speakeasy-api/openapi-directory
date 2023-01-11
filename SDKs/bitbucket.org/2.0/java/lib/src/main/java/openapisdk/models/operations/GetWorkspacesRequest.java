package openapisdk.models.operations;



public class GetWorkspacesRequest {
    public GetWorkspacesQueryParams queryParams;
    public GetWorkspacesRequest withQueryParams(GetWorkspacesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWorkspacesSecurity security;
    public GetWorkspacesRequest withSecurity(GetWorkspacesSecurity security) {
        this.security = security;
        return this;
    }
}