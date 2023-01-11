package openapisdk.models.operations;



public class GetUserPermissionsTeamsRequest {
    public GetUserPermissionsTeamsQueryParams queryParams;
    public GetUserPermissionsTeamsRequest withQueryParams(GetUserPermissionsTeamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserPermissionsTeamsSecurity security;
    public GetUserPermissionsTeamsRequest withSecurity(GetUserPermissionsTeamsSecurity security) {
        this.security = security;
        return this;
    }
}