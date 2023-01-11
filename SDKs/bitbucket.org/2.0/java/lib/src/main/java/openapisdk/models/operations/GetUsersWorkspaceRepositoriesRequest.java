package openapisdk.models.operations;



public class GetUsersWorkspaceRepositoriesRequest {
    public GetUsersWorkspaceRepositoriesPathParams pathParams;
    public GetUsersWorkspaceRepositoriesRequest withPathParams(GetUsersWorkspaceRepositoriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersWorkspaceRepositoriesSecurity security;
    public GetUsersWorkspaceRepositoriesRequest withSecurity(GetUsersWorkspaceRepositoriesSecurity security) {
        this.security = security;
        return this;
    }
}