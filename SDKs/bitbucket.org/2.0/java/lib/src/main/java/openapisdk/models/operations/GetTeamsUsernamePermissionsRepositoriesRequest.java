package openapisdk.models.operations;



public class GetTeamsUsernamePermissionsRepositoriesRequest {
    public GetTeamsUsernamePermissionsRepositoriesPathParams pathParams;
    public GetTeamsUsernamePermissionsRepositoriesRequest withPathParams(GetTeamsUsernamePermissionsRepositoriesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamsUsernamePermissionsRepositoriesQueryParams queryParams;
    public GetTeamsUsernamePermissionsRepositoriesRequest withQueryParams(GetTeamsUsernamePermissionsRepositoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTeamsUsernamePermissionsRepositoriesSecurity security;
    public GetTeamsUsernamePermissionsRepositoriesRequest withSecurity(GetTeamsUsernamePermissionsRepositoriesSecurity security) {
        this.security = security;
        return this;
    }
}