package openapisdk.models.operations;



public class GetTeamsWorkspaceRepositoriesRequest {
    public GetTeamsWorkspaceRepositoriesPathParams pathParams;
    public GetTeamsWorkspaceRepositoriesRequest withPathParams(GetTeamsWorkspaceRepositoriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsWorkspaceRepositoriesSecurity security;
    public GetTeamsWorkspaceRepositoriesRequest withSecurity(GetTeamsWorkspaceRepositoriesSecurity security) {
        this.security = security;
        return this;
    }
}